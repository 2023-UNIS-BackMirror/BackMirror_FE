import React, { useEffect, useState } from "react";
import QuestionBox from "../components/QnA/QuestionBox";
import BackButton from "../components/BackButton";
import grayStone from "../assets/grayStone.png";
import { styled } from "styled-components";
import next from "../assets/next.png";
import { GetQuestion } from "../api/question";
import { useNavigate, useParams } from "react-router-dom";
import { PostFailure } from "../api/post";

const QnAPage = () => {
  const { type } = useParams();
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [arr, setArr] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getList(type);
  }, []);

  useEffect(() => {
    setAnswer("");
    console.log(index);
    if (index && index === questions.length) {
      navigate("/complete");

      PostFailure(type, arr);
    }
  }, [arr]);

  const getList = async (type) => {
    try {
      //프로미스 해결 및 데이터 접근
      setQuestions(await GetQuestion(type));
    } catch (error) {
      console.log("에러 발생", error);
    }
  };

  return (
    <div>
      <BackButton />
      <Wrapper>
        <QuestionBox text={questions[index] && questions[index].contents} />
        <Stone>
          <img src={grayStone} alt="" />
        </Stone>
        <Answer>
          <textarea
            placeholder="답변을 입력해주세요."
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            value={answer}
          />
        </Answer>
      </Wrapper>
      <NextButton
        onClick={() => {
          setIndex((index) => index + 1);
          const el = { questionId: questions[index].id, answer: answer };
          setArr((arr) => {
            const newArr = [...arr, el];
            return newArr;
          });
        }}
      >
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
