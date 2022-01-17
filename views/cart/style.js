import styled from "styled-components";

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
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const Tr = styled.tr``;

export const Name = styled.span`
  font-weight: 500;
  color: #d1411e;
  font-style: 18px;
`;
export const Total = styled.span`
  font-weight: 500;
  font-style: 18px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
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
  height: 30px;
  color: #d1411e;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;
