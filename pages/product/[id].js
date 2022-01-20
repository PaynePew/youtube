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
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import axios from "axios";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <Container>
      <Left>
        <ImgContainer>
          <Image src={pizza.img} layout="fill" alt="" />
        </ImgContainer>
      </Left>
      <Right>
        <Title>{pizza.title}</Title>
        <Price>${price}</Price>
        <Desc>{pizza.desc}</Desc>
        <Choose>Choose the size</Choose>
        <Sizes>
          <Size onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <Number>Small</Number>
          </Size>
          <Size onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <Number>Medium</Number>
          </Size>
          <Size onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <Number>Large</Number>
          </Size>
        </Sizes>
        <Choose>Choose additional ingredients</Choose>
        <Ingredients>
          {pizza.extraOptions.map((_option) => (
            <Option key={_option._id}>
              <Checkbox
                type="checkbox"
                id={_option.text}
                name={_option.text}
                onChange={(e) => handleChange(e, _option)}
              />
              <label htmlFor="double">{_option.text}</label>
            </Option>
          ))}
        </Ingredients>
        <Add>
          <Quantity
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button onClick={handleClick}>Add to Cart</Button>
        </Add>
      </Right>
    </Container>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
