import {
  Container,
  ImgContainer,
  Left,
  Price,
  Right,
  Title,
  Desc,
  Choose,
  Sizes,
  Size,
  Number,
  Ingredients,
  Option,
  Checkbox,
  Add,
  Quantity,
  Button,
} from "../../views/product/style";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <Container>
      <Left>
        <ImgContainer>
          <Image src={pizza.img} layout="fill" alt="" />
        </ImgContainer>
      </Left>
      <Right>
        <Title>{pizza.name}</Title>
        <Price>${pizza.price[size]}</Price>
        <Desc>{pizza.desc}</Desc>
        <Choose>Choose the size</Choose>
        <Sizes>
          <Size onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <Number>Small</Number>
          </Size>
          <Size onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <Number>Medium</Number>
          </Size>
          <Size onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <Number>Large</Number>
          </Size>
        </Sizes>
        <Choose>Choose additional ingredients</Choose>
        <Ingredients>
          <Option>
            <Checkbox type="checkbox" id="double" name="double" />
            <label htmlFor="double">Double Ingredients</label>
            <Checkbox type="checkbox" id="cheese" name="cheese" />
            <label htmlFor="cheese">Cheese</label>
            <Checkbox type="checkbox" id="spicy" name="spicy" />
            <label htmlFor="cheese">Spicy Sauce</label>
            <Checkbox type="checkbox" id="garlic" name="garlic" />
            <label htmlFor="cheese">Garlic Sauce</label>
          </Option>
        </Ingredients>
        <Add>
          <Quantity type="number" defaultValue={1} />
          <Button>Add to Cart</Button>
        </Add>
      </Right>
    </Container>
  );
};

export default Product;
