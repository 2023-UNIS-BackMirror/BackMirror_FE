import React from "react";
import { styled } from "styled-components";

const Failure = ({ isEven, img, type }) => {
  return (
    <Box $iseven={isEven}>
      <Img>
        <img src={img} />
      </Img>
      <div className="text">
        <Name>{type}</Name>
        <Content>당신을 도와줄 {type}에 관심있나요?</Content>
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
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    height: 75px;
  }
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
  width: 227px;
  height: 74px;
  flex-shrink: 0;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 22.1px */
  letter-spacing: 0.13px;
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
