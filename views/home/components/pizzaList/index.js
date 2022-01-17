import PizzaCard from "../pizzaCard";
import { Container, Desc, Title, Wrapper } from "./style";

function PizzaList() {
  return (
    <Container>
      <Title>THE BEST PIZZA IN TOWN</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure quas,
        similique dignissimos eaque ratione animi repudiandae at, consequatur
        sapiente commodi veniam deserunt eligendi. Beatae odit cupiditate
        nesciunt accusamus inventore!
      </Desc>
      <Wrapper>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </Wrapper>
    </Container>
  );
}

export default PizzaList;
