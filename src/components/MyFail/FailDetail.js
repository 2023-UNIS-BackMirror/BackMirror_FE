import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const FailDetail = ({ postId, question, answer }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <div className="text">
        <Name>{question}</Name>
        <Content>{answer}</Content>
      </div>
    </Box>
  );
};

export default FailDetail;
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
  width: 100%;
<<<<<<< HEAD
  color: #5F90DB;
=======
  color: #fff;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
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
<<<<<<< HEAD
  color: #5F90DB;
=======
  color: #fff;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
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
<<<<<<< HEAD
  border-radius: 20px;
  background: #F9FBFE;
  border: solid 0.5px  ${(props) => (props.$iseven ? "#78A8B7" : "#a4d2e0")};
  box-shadow: 0px 0px 3px 0px #5F90DB;
=======
  border-radius: 30px;
  background: ${(props) => (props.$iseven ? "#78A8B7" : "#a4d2e0")};
  box-shadow: 0px 0px 10px 0px #a4d2e0;
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
  display: flex;

  .text {
    margin-top: 14px;
    margin-left: 15px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
