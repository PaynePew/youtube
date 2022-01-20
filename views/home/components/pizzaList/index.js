import PizzaCard from "../pizzaCard";
import { Container, Desc, Title, Wrapper } from "./style";

function PizzaList({ pizzaList }) {
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
        {pizzaList.map((_pizza) => (
          <PizzaCard key={_pizza._id} pizza={_pizza} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default PizzaList;
