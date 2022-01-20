import styled from "styled-components";
import { MEDIA_BREAK } from "../globals";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 100px;
  padding: 0px 50px;
  background-color: #d1411e;
  z-index: 999;
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(2) {
    flex: 3;
  }
  @media screen and (max-width: ${MEDIA_BREAK}px) {
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(1) {
      flex: 3;
    }
  }
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  color: white;
`;

export const ListItem = styled.li`
  margin: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const Cart = styled.div`
  position: relative;
`;

export const Counter = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1411e;
`;

export const CallButton = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  margin-left: 20px;
  color: white;
`;

export const Text = styled.div`
  &:nth-child(1) {
    font-size: 12px;
    font-weight: 500;
  }
  &:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
  }
`;
