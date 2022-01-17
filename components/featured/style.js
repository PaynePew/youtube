import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  background-color: #d1411e;
  overflow: hidden;
  position: relative;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 10%;
  height: 20%;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

export const Wrapper = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
`;
export const ImgContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
`;
