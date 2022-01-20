import Image from "next/image";
import Link from "next/link";
import { Container, Desc, Price, Title } from "./style";

const PizzaCard = ({ pizza }) => {
  return (
    <Container>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <Title>{pizza.title}</Title>
      <Price>${pizza.prices[0]}</Price>
      <Desc>{pizza.desc}</Desc>
    </Container>
  );
};

export default PizzaCard;
