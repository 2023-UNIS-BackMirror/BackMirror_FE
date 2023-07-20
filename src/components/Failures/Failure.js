import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Failure = ({ id, isEven, image, contents, name }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate(`./${id}`);
      }}
      $iseven={isEven}
    >
      <Img>
        <img src={image} alt="" />
      </Img>
      <div className="text">
        <Name>{name}</Name>
        <Content>{contents}</Content>
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
`;
const Name = styled.div`
  width: 203px;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 25.5px */
  letter-spacing: 0.15px;
`;
const Content = styled.div`
  width: 223px;
  height: 70px;
  flex-shrink: 0;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 22.1px */
  letter-spacing: 0.13px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
const Box = styled.div`
  margin: auto;
  margin-bottom: 25px;
  width: 363px;
  height: 127px;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${(props) => (props.$iseven ? "#78A8B7" : "#a4d2e0")};
  box-shadow: 0px 0px 10px 0px #a4d2e0;
  display: flex;

  .text {
    margin-top: 14px;
    margin-left: 15px;
    width: 227px;
    display: flex;
    flex-direction: column;
  }
`;
