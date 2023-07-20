import React from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import Failure from "../components/Failures/Failure";
const FailuresPage = () => {
  return (
    <>
      <BackButton />
      <Title>당신도 할 수 있어요!</Title>
      <Container>
        <Failure isEven={false} />
        <Failure isEven={true} />
      </Container>
    </>
  );
};

export default FailuresPage;
const Container = styled.div`
  margin-top: 33px;
`;
const Title = styled.div`
  margin: auto;
  margin-top: 3px;
  width: 283px;
  color: #6db3d9;
  text-align: center;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
  letter-spacing: 0.22px;
`;
