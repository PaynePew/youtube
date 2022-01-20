import {
  CallButton,
  Container,
  Item,
  List,
  Text,
  TextWrapper,
  ListItem,
  Cart,
  Counter,
} from "./style";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Item>
        <CallButton>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </CallButton>
        <TextWrapper>
          <Text>ORDER NOW!</Text>
          <Text>012 345 678</Text>
        </TextWrapper>
      </Item>
      <Item>
        <List>
          <Link href="/" passHref>
            <ListItem>Homepage</ListItem>
          </Link>
          <ListItem>Products</ListItem>
          <ListItem>Menu</ListItem>
          <Image src="/img/logo.png" alt="" width="160" height="69" />
          <ListItem>Events</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Item>
      <Link passHref href="/cart">
        <Item>
          <Cart>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <Counter>{quantity}</Counter>
          </Cart>
        </Item>
      </Link>
    </Container>
  );
};

export default Navbar;
