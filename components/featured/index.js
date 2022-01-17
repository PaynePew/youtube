import Image from "next/image";
import { ArrowContainer, Container, ImgContainer, Wrapper } from "./style";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const imgages = ["/img/pizza_1.jpg", "/img/pizza_3.jpg", "/img/pizza_4.jpg"];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <ArrowContainer style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </ArrowContainer>
      <Wrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        {imgages.map((img, i) => (
          <ImgContainer key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </ImgContainer>
        ))}
      </Wrapper>
      <ArrowContainer style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </ArrowContainer>
    </Container>
  );
};

export default Featured;
