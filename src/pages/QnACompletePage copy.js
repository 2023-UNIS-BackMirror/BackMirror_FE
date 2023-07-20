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
      <Btns>
        <CompleteBtn>
          나의 실패
          <br />
          목록으로
        </CompleteBtn>
        <CompleteBtn>
          실패담
          <br />
          목록으로
        </CompleteBtn>
      </Btns>
    </>
  );
};

export default QnACompletePage;
const Btns = styled.div`
  display: flex;
`;
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
  margin-top: 35px;
  display: flex;
  justify-content: center;
  img {
    width: 100vw;
  }
`;

const CompleteBtn = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: auto;
  margin-top: 26px;
  width: 170px;
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
