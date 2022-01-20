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
} from "../views/cart/style";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Product from "./product/[id]";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Left>
        <Table>
          <Tr title="true">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </Tr>
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
          <Button>CHECKOUT NOW!</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Cart;
