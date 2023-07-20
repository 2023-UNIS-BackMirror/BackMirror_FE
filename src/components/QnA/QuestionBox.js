import question from "../../assets/QnA/question.png";
import { styled } from "styled-components";
import React from "react";

const QuestionBox = () => {
  return (
    <QBox>
      <img src={question} alt="" />
      <div className="question">
        당신이 생각하는 문제 해결 방법은 무엇인가요?
      </div>
    </QBox>
  );
};

export default QuestionBox;

const QBox = styled.div`
  display: flex;
  justify-content: center;

  background-size: cover;
  position: relative;
  img {
    width: 307px;
    height: 204.002px;
  }
  .question {
    width: 270px;
    height: 128px;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #fff;
    font-family: Noto Sans KR;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 170%; /* 37.4px */
    letter-spacing: 0.22px;
  }
`;
