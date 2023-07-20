import React from "react";
import BackButton from "../components/BackButton";
import { styled } from "styled-components";
import stones from "../assets/stones.png";
const QnACompletePage = () => {
  return (
    <>
      <BackButton />
      <Wrapper>
        <Title>
          실패 작성이
          <br />
          완료되었습니다
        </Title>
        <Stone>
          <img src={stones} alt="" />
        </Stone>
      </Wrapper>
      <CompleteBtn>실패 목록 가기</CompleteBtn>
    </>
  );
};

export default QnACompletePage;

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 46px;
  }
`;

const Title = styled.div`
  margin-top: 7px;
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
const Stone = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  img {
    width: 100vw;
  }
`;

const CompleteBtn = styled.div`
  margin: auto;
  margin-top: 26px;
  width: 327px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #6db3d9;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.7px;
`;
