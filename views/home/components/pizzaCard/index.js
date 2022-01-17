import Image from "next/image";
import { Container, Desc, Price, Title } from "./style";

const PizzaCard = () => {
  return (
    <Container>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <Title>FIORI DI ZUCCA</Title>
      <Price>$19.90</Price>
      <Desc>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
      </Desc>
    </Container>
  );
};

export default PizzaCard;
