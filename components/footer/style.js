import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  background-color: #222;
  display: flex;
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
`;
export const Text = styled.p`
  color: lightgray;
`;
