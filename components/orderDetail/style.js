import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: center;
  background-color: rgba(197, 197, 197, 0.568);
`;

export const Wrapper = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 300;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  label {
    margin-bottom: 10px;
  }
  input {
    height: 40px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;
