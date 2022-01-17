import styled from "styled-components";
import { keyframes, css } from "styled-components";

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
`;

export const CheckedIcon = styled.div``;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Tr = styled.tr``;

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
