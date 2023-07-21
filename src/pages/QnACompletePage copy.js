import React from "react";
import BackButton from "../components/BackButton";
import { styled } from "styled-components";
import stones from "../assets/stones.gif";
import { useNavigate } from "react-router-dom";
const QnACompletePage = () => {
  const navigate = useNavigate();
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
        <CompleteBtn
          onClick={() => {
            navigate("/goHome");
          }}
        >
          나의 실패
          <br />
          보관함으로
        </CompleteBtn>
        <CompleteBtn
          onClick={() => {
            navigate("/failures");
          }}
        >
          유명 인사의 실패담
          <br />
          알아보기
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
  margin-top: 0px;
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  img {
    width: 320px;
  }
`;

const CompleteBtn = styled.div`
  margin: auto;
  margin-top: 35px;
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
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.7px;
  cursor: pointer;
`;
