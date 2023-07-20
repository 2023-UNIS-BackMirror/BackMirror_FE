import React from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";

const FailureDetailPage = () => {
  return (
    <>
      <BackButton />
      <Title>{"헬렌켈러의 이야기"}</Title>
      <Container>
        <SubTitle>
          {"실패는 성공의 이모다 어쩌 저쩌구 저쩌  어쩌구 저쩌구 저쩌구"}
        </SubTitle>
        <Img>
          <img src={""} alt="" />
        </Img>
        <Writer>{"작성자"}</Writer>
        <Content>
          {
            "실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구 실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구실패는 성공의 이모다 어쩌구 저쩌구구"
          }
        </Content>
      </Container>
    </>
  );
};

export default FailureDetailPage;
const Img = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 306px;
  height: 246.79px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fafafa;
`;
const Writer = styled.div`
  margin-top: 12px;
  margin-right: 21px;
  height: 17.787px;
  flex-shrink: 0;
  color: #3a3a3a;
  text-align: right;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Title = styled.div`
  margin: auto;
  margin-top: 2px;
  width: 283px;
  color: #6db3d9;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  letter-spacing: 0.22px;
`;
const SubTitle = styled.div`
  margin: auto;
  width: 299px;
  height: 24px;
  flex-shrink: 0;
  color: #6db3d9;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Date = styled.div`
  width: 141px;
  height: 30.015px;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;
const Content = styled.div`
  margin: auto;
  margin-top: 12px;
  width: 306px;
  height: 263.465px;
  flex-shrink: 0;
  color: #3a3a3a;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: scroll;
`;

const Container = styled.div`
  margin: auto;
  margin-top: 42px;
  width: 349px;
  height: 667px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #d2e8ef;
  box-shadow: 0px 0px 10px 0px #d2e8ef;
`;
