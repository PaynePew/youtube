import styled from "styled-components";
import { MEDIA_BREAK } from "../globals";

export const Container = styled.div`
  height: calc(100vh - 100px);
  background-color: #222;
  display: flex;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    height: auto;
    text-align: center;
  }
`;
export const Item = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  &:last-child {
    flex: 2;
    padding: 50px;
    justify-content: space-between;
  }
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &:first-child {
      display: none;
    }
    flex-direction: column;
  }
`;
export const Card = styled.div`
  flex: 1;
  padding: 0 20px;
`;
export const Motto = styled.h2`
  color: rgb(211, 211, 211);
`;
export const Title = styled.h1`
  font-size: 18px;
  color: #b7903c;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 30px;
  }
`;
export const Text = styled.p`
  color: lightgray;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 20px;
  }
`;
