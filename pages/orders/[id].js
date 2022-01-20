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
  Id,
  Name,
  Address,
  Total,
} from "../../views/orders/style";
import Image from "next/image";
import axios from "axios";

const Orders = ({ order }) => {
  const status = order.status;
  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "inProgress";
    if (index - status > 1) return "undone";
  };

  return (
    <Container>
      <Left>
        <Row>
          <Table>
            <tbody>
              <Tr title="true">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </Tr>
            </tbody>
            <tbody>
              <Tr>
                <td>
                  <Id>{order._id}</Id>
                </td>
                <td>
                  <Name>{order.customer}</Name>
                </td>
                <td>
                  <Address>{order.address}</Address>
                </td>
                <td>
                  <Total>${order.total}</Total>
                </td>
              </Tr>
            </tbody>
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
            <TotalTextTitle>Subtotal:</TotalTextTitle>${order.total}
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>$0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>${order.total}
          </TotalText>
          <Button>PAID</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Orders;
