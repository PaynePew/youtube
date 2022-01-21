import styled from "styled-components";

export const MainAddButton = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: #d1411e;
  width: 150px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(245, 240, 240, 0.52);
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 500px;
  background-color: white;
  padding: 10px 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
