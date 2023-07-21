import React from "react";
import { styled } from "styled-components";

const Failure = ({ isEven, img, type, link }) => {
  return (
    <Box
      $iseven={isEven}
      onClick={() => {
        window.open(link);
      }}
    >
      <Img>
        <img src={img} alt="" />
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
<<<<<<< HEAD
    width: 55px;
    height: 55px;
=======
    width: 75px;
    height: 75px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
  }
`;
const Name = styled.div`
  width: 203px;
  color: #fff;
  font-family: Noto Sans KR;
<<<<<<< HEAD
  font-size: 22px;
=======
  font-size: 15px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
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
<<<<<<< HEAD
  font-size: 14px;
=======
  font-size: 13px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 22.1px */
  letter-spacing: 0.13px;
`;
const Box = styled.div`
  margin: auto;
  margin-bottom: 25px;
  width: 363px;
<<<<<<< HEAD
  height: 120px;
=======
  height: 127px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
  flex-shrink: 0;
  border-radius: 30px;
  background: ${(props) => (props.$iseven ? "#78A8B7" : "#a4d2e0")};
  box-shadow: 0px 0px 10px 0px #a4d2e0;
  display: flex;

  .text {
<<<<<<< HEAD
    margin-top: 25px;
    margin-left: 5px;
=======
    margin-top: 14px;
    margin-left: 15px;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
    width: 227px;
    display: flex;
    flex-direction: column;
  }
`;
