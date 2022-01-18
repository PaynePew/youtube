import styled from "styled-components";
import { MEDIA_BREAK } from "../../components/globals";

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    height: auto;
    text-align: center;
    flex-direction: column;
  }
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 70vw;
    height: 70vw;
  }
`;
export const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h1`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    margin: 5px;
  }
`;

export const Price = styled.span`
  color: #d1411e;
  font-size: 24px;
  font-weight: 400;
  border-bottom: 1px solid #d1411e;
`;
export const Desc = styled.p``;
export const Choose = styled.h3``;

export const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 100%;
    padding: 0 20px;
  }
`;
export const Size = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  &:nth-child(2) {
    width: 40px;
    height: 40px;
  }
  &:last-child {
    width: 50px;
    height: 50px;
  }
`;
export const Number = styled.span`
  position: absolute;
  top: -5px;
  right: -20px;
  background-color: teal;
  color: white;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 10px;
`;

export const Ingredients = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    flex-direction: column;
    font-size: 80px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    margin: 10px;
    font-style: 18px;
  }
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 25px;
    height: 25px;
  }
`;
export const Add = styled.div``;
export const Quantity = styled.input`
  width: 50px;
  height: 30px;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    height: 50px;
    padding: 10px 20px;
  }
`;

export const Button = styled.button`
  height: 30px;
  margin-left: 10px;
  background-color: #d1411e;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    height: 50px;
    padding: 10px 20px;
  }
`;
