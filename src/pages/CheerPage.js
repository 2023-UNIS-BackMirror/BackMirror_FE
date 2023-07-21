import React from "react";
import BackButton from "../components/BackButton";
import { styled } from "styled-components";
import QuestionBox from "../components/QnA/QuestionBox";
import blueStone from "../assets/blueStone.png";
const CheerPage = () => {
  return (
    <>
      <BackButton />
      <Wrapper>
        <Title>
          용기낸 당신을 위한
          <br />
          응원이 도착했어요 🍀
        </Title>
        <p />
        <QuestionBox
          text={"포기하지 말아요! 노력하는 자에게 언젠가 기회가 어쩌고"}
        />
        <Stone>
          <img src={blueStone} alt="" />
        </Stone>
      </Wrapper>
      <CompleteBtn >작성 완료하기</CompleteBtn>
    </>
  );
};

export default CheerPage;

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
  margin-top: 13px;
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
  margin-top: 30px;
  display: flex;
  justify-content: center;
  img {
    width: 225px;
    height: 164px;
  }
`;

const CompleteBtn = styled.div`
  margin: auto;
  margin-top: 71px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.7px;
`;
