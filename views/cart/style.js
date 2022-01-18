import styled from "styled-components";
import { MEDIA_BREAK } from "../../components/globals";

export const Container = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    flex-direction: column;
    padding: 20px;
  }
`;
export const Left = styled.div`
  flex: 2;
`;
export const Right = styled.div`
  flex: 1;
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Tr = styled.tr`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    display: ${(props) => (props.title ? "none" : "flex")};
  }
`;

export const Name = styled.span`
  font-weight: 500;
  color: #d1411e;
  font-size: 18px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 24px;
  }
`;
export const Total = styled.span`
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 24px;
    &::before {
      content: "Total: ";
      font-weight: 500;
    }
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 30vw;
    height: 30vw;
  }
`;
export const Wrapper = styled.div`
  width: 90%;
  max-height: 300px;
  background-color: #333;
  padding: 50px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 100%;
  }
`;
export const Title = styled.h2``;
export const TotalText = styled.div``;
export const TotalTextTitle = styled.b`
  margin-right: 10px;
`;
export const Button = styled.button`
  height: 30px;
  color: #d1411e;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;

export const Extras = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 22px;
  }
`;
export const Price = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 22px;
    &::before {
      content: "Price: ";
      font-weight: 500;
    }
  }
`;
export const Quantity = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 22px;
    &::before {
      content: "Quantity: ";
      font-weight: 500;
    }
  }
`;
