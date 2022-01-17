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
} from "../views/cart/style";
import Image from "next/image";

const Cart = () => {
  return (
    <Container>
      <Left>
        <Table>
          <Tr>
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
              <span>Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span>$19.90</span>
            </td>
            <td>
              <span>2</span>
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
              <span>Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span>$19.90</span>
            </td>
            <td>
              <span>2</span>
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
              <span>Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span>$19.90</span>
            </td>
            <td>
              <span>2</span>
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
