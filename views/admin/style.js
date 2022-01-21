import styled from "styled-components";
import { MEDIA_BREAK } from "../../components/globals/index";

export const Container = styled.div`
  padding: 50px;
  display: flex;
`;

export const Item = styled.div`
  flex: 1;
  table {
    width: 100%;
    border-spacing: 20px;
    text-align: left;
  }
  button {
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
    &:first-child {
      background-color: teal;
      margin-right: 10px;
    }
    &:last-child {
      background-color: crimson;
    }
  }
`;

export const LoginContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: 40px;
    margin-bottom: 20px;
    padding: 0px 10px;
  }
  button {
    height: 40px;
    margin-bottom: 20px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  span {
    font-size: 13px;
    color: red;
  }
`;
