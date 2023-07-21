import question from "../../assets/QnA/question.png";
import { styled } from "styled-components";
import React from "react";

const QuestionBox = ({ text }) => {
  return (
    <QBox>
      <img src={question} alt="" />
      <div className="question">{text}</div>
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
<<<<<<< HEAD
    height: 180px;
=======
    height: 204.002px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
  }
  .question {
    width: 270px;
    height: 128px;

    position: absolute;
<<<<<<< HEAD
    top: 45%;
=======
    top: 40%;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
    left: 50%;
    transform: translate(-50%, -50%);

    color: #fff;
    font-family: Noto Sans KR;
<<<<<<< HEAD
    font-size: 20px;
=======
    font-size: 22px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
    font-style: normal;
    font-weight: 700;
    line-height: 170%; /* 37.4px */
    letter-spacing: 0.22px;
  }
`;
