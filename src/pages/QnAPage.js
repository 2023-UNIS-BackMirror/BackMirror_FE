import React from "react";
import QuestionBox from "../components/QnA/QuestionBox";
import BackButton from "../components/BackButton";
import grayStone from "../assets/grayStone.png";
import { styled } from "styled-components";
import next from "../assets/next.png";

const QnAPage = () => {
  return (
    <div>
      <BackButton />
      <Wrapper>
        <QuestionBox />
        <Stone>
          <img src={grayStone} alt="" />
        </Stone>
        <Answer>
          <textarea placeholder="답변을 입력해주세요." />
        </Answer>
      </Wrapper>
      <NextButton>
        <img src={next} alt="" />
      </NextButton>
    </div>
  );
};

export default QnAPage;
const NextButton = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 15px;
  margin-top: 30px;
  img {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
`;

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Stone = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  img {
    width: 225px;
    height: 164px;
  }
`;
const Answer = styled.div`
  margin-top: 59px;
  width: 340px;
  height: 203px;
  border-radius: 12px;
  border: 2px solid #d2e8ef;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    border: none;
    background: #fafafa;
    color: #000;
    width: 302px;
    height: 168px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 170%;
    letter-spacing: 0.16px;
    outline: none;
  }
`;
