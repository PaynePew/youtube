import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { MEDIA_BREAK } from "../../components/globals";

const sparkle = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 2;
`;

export const Right = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  &:last-child {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &:last-child {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CheckedIcon = styled.div``;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    margin-bottom: 20px;
  }
  ${(props) => {
    switch (props.$mode) {
      case "done":
        return;
      case "inProgress":
        return css`
          animation: ${sparkle} 1s ease infinite alternate;
          ${CheckedIcon} {
            display: none;
          }
        `;
      case "undone":
        return css`
          opacity: 0.3;
          ${CheckedIcon} {
            display: none;
          }
        `;
    }
  }}
`;

export const Tr = styled.tr`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 20px;
    display: ${(props) => (props.title ? "none" : "flex")};
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 50px;
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
  background-color: white;
  height: 30px;
  color: teal;
  font-weight: bold;
  margin-top: 20px;
  cursor: not-allowed;
`;

export const Id = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &::before {
      content: "Order ID: ";
      font-weight: 500;
    }
  }
`;
export const Name = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &::before {
      content: "Customer: ";
      font-weight: 500;
    }
  }
`;
export const Address = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &::before {
      content: "Address: ";
      font-weight: 500;
    }
  }
`;
export const Total = styled.span`
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &::before {
      content: "Total: ";
      font-weight: 500;
    }
  }
`;
