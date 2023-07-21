import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import stone from "../../assets/blueStone.png";

const Failure = ({ postId, type, createdAt, message, qnaList }) => {
  const typeList = {"relationship" : "인간관계", "study" : "전공·학업", "activity" : "대외활동", "money": "금전", "job": "취업"}
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate(`./${postId}`);
      }}
    >
      <div className="imgDiv">
        <img src={stone} />
      </div>
      <div className="text">
        <Name>
          <div>{typeList[type]}</div>
          <div className="createdAt">{createdAt}</div>
        </Name>

        <Content>{qnaList[0] && qnaList[0].answer}</Content>
      </div>
    </Box>
  );
};

export default Failure;
const Img = styled.div`
  margin-top: 14px;
  margin-left: 16px;
  width: 93px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #fafafa;
  display: flex;
  overflow: hidden;

  img {
    width: 93px;
    height: 100px;
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  color: #5F90DB;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 25.5px */
  letter-spacing: 0.15px;
  .createdAt {
    font-size: 12px;
    font-weight: lighter;
    color: #bcbcbc;
    text-align: right;
  }
`;
const Content = styled.div`
  width: 223px;
  height: 70px;
  flex-shrink: 0;
  color: #585858;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  letter-spacing: 0.13px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const Box = styled.div`
  margin: auto;
  margin-bottom: 25px;
  width: 363px;
  height: 127px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ffffff;
  border: solid 0.5px  ${(props) => (props.$iseven ? "#78A8B7" : "#a4d2e0")};
  box-shadow: 0px 0px 3px 0px #5F90DB;
  display: flex;
  flex-direction: row;

  .text {
    margin-top: 14px;
    margin-left: 15px;
    width: 90%px;
    display: flex;
    flex-direction: column;
  }
  .imgDiv {
    width: 32%;
    display: flex;
    justify-contents: center;
  }
  img {
    width: 70%;
    height: 50%;
    margin: auto;
  }
`;
