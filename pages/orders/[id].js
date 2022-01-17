import {
  Container,
  Left,
  Right,
  Wrapper,
  Title,
  TotalTextTitle,
  TotalText,
  Button,
  Row,
  Table,
  Tr,
  Status,
  CheckedIcon,
} from "../../views/orders/style";
import Image from "next/image";


const Orders = () => {

const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'inProgress';
    if (index - status > 1) return 'undone';
  };

  return (
    <Container>
      <Left>
        <Row>
          <Table>
            <Tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </Tr>
            <Tr>
              <td>
                <span>113213</span>
              </td>
              <td>
                <span>John Doe</span>
              </td>
              <td>
                <span>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span>$79.80</span>
              </td>
            </Tr>
          </Table>
        </Row>
        <Row>
          <Status $mode={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <CheckedIcon>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </CheckedIcon>
          </Status>
          <Status $mode={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <CheckedIcon>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </CheckedIcon>
          </Status>
          <Status $mode={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the Way</span>
            <CheckedIcon>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </CheckedIcon>
          </Status>
          <Status $mode={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <CheckedIcon>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </CheckedIcon>
          </Status>
        </Row>
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
          <Button>PAID</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Orders;
