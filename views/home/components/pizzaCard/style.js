import styled from "styled-components";
import { MEDIA_BREAK } from "../../../../components/globals";

export const Container = styled.div`
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  cursor: pointer;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #d1411e;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 30px;
  }
`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 24px;
  }
`;
export const Desc = styled.p`
  text-align: center;
  color: #777;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    font-size: 24px;
  }
`;
