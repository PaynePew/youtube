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

export const Close = styled.span`
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  width: ${(props) => (props.inputSm ? "25%" : "none")};
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Extra = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExtraItems = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-wrap: wrap;
`;
export const ExtraItem = styled.span`
  padding: 5px;
  font-size: 14px;
  border: 1px solid tomato;
  background-color: white;
  color: tomato;
  margin-right: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
export const AddButton = styled.button`
  width: 25%;
  border: none;
  background-color: teal;
  color: white;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 0;
  align-self: flex-end;
`;
