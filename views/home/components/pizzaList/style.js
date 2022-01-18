import styled from "styled-components";
import { MEDIA_BREAK } from "../../../../components/globals";

export const Container = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    text-align: center;
  }
`;
export const Desc = styled.p`
  font-size: 24px;
  color: #444;
  width: 70%;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    width: 90%;
    text-align: center;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
