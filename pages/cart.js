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

const Cart = () => {
  return (
    <Container>
      <Left>
        <Table>
          <Tr title={true}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </Tr>
          <Tr>
            <td>
              <ImgContainer>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </ImgContainer>
            </td>
            <td>
              <Name>CORALZO</Name>
            </td>
            <td>
              <Extras>Double ingredient, spicy sauce</Extras>
            </td>
            <td>
              <Price>$19.90</Price>
            </td>
            <td>
              <Quantity>2</Quantity>
            </td>
            <td>
              <Total>$39.8</Total>
            </td>
          </Tr>
          <Tr>
            <td>
              <ImgContainer>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </ImgContainer>
            </td>
            <td>
              <Name>CORALZO</Name>
            </td>
            <td>
              <Extras>Double ingredient, spicy sauce</Extras>
            </td>
            <td>
              <Price>$19.90</Price>
            </td>
            <td>
              <Quantity>2</Quantity>
            </td>
            <td>
              <Total>$39.8</Total>
            </td>
          </Tr>
          <Tr>
            <td>
              <ImgContainer>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </ImgContainer>
            </td>
            <td>
              <Name>CORALZO</Name>
            </td>
            <td>
              <Extras>Double ingredient, spicy sauce</Extras>
            </td>
            <td>
              <Price>$19.90</Price>
            </td>
            <td>
              <Quantity>2</Quantity>
            </td>
            <td>
              <Total>$39.8</Total>
            </td>
          </Tr>
        </Table>
      </Left>
      <Right>
        <Wrapper>
          <Title>Cart Total</Title>
          <TotalText>
            <TotalTextTitle>Subtotal:</TotalTextTitle>$79.60
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>$0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>$79.60
          </TotalText>
          <Button>CHECKOUT NOW!</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Cart;
