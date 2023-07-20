import React from "react";
import start from "../assets/start.png";
import { styled } from "styled-components";
const StartPage = () => {
  return (
    <Wrapper>
      <img src={start} alt="" />
    </Wrapper>
  );
};

export default StartPage;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 324px;
    height: 276px;
  }
`;
