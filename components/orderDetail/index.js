import { useState } from "react";
import { Button, Container, Item, Title, Wrapper } from "./style";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <Container>
      <Wrapper>
        <Title>You will pay $12 after delivery</Title>
        <Item>
          <label>Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
          ></input>
        </Item>
        <Item>
          <label>Phone Number</label>
          <input type="text" placeholder="+1 234 567 89"></input>
        </Item>
        <Item>
          <label>Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Item>
        <Button onClick={handleClick}>Order</Button>
      </Wrapper>
    </Container>
  );
};

export default OrderDetail;
