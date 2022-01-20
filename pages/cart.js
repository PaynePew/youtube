import {
  Button,
  Container,
  ImgContainer,
  Left,
  Name,
  Right,
  Table,
  Title,
  Total,
  TotalText,
  TotalTextTitle,
  Tr,
  Wrapper,
  Extras,
  Price,
  Quantity,
  PaymentMethods,
  PayButton,
} from "../views/cart/style";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/orderDetail";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <Container>
      <Left>
        <Table>
          <tbody>
            <Tr title="true">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </Tr>
          </tbody>
          <tbody>
            {cart.products.map((_product) => (
              <Tr key={_product._id}>
                <td>
                  <ImgContainer>
                    <Image
                      src={_product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </ImgContainer>
                </td>
                <td>
                  <Name>{_product.title}</Name>
                </td>
                <td>
                  {_product.extras.map((_extra) => (
                    <Extras key={_extra._id}>{_extra.text}</Extras>
                  ))}
                </td>
                <td>
                  <Price>${_product.price}</Price>
                </td>
                <td>
                  <Quantity>{_product.quantity}</Quantity>
                </td>
                <td>
                  <Total>${_product.price * _product.quantity}</Total>
                </td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Left>
      <Right>
        <Wrapper>
          <Title>Cart Total</Title>
          <TotalText>
            <TotalTextTitle>Subtotal:</TotalTextTitle>${cart.total}
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>$0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>${cart.total}
          </TotalText>
          {open ? (
            <PaymentMethods>
              <PayButton onClick={() => setCash(true)}>
                CASH ONDELIVERY
              </PayButton>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AdtnalND6kvBG8BkvRo6FhRPgkQ3NfTtJNoSrHzPuW7JsJCJZZbCV0bOsymaJPydNH-6QGP4epoLApIE",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </PaymentMethods>
          ) : (
            <Button onClick={() => setOpen(true)}>CHECKOUT NOW!</Button>
          )}
        </Wrapper>
      </Right>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </Container>
  );
};

export default Cart;
