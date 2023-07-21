import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import { getInterviewDetail } from "../api/famous";
import { useParams } from "react-router-dom";
const FailureDetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    getDetail();
    console.log(detail);
  }, []);

  const getDetail = async () => {
    try {
      //프로미스 해결 및 데이터 접근
      const data = await getInterviewDetail(id);
      setDetail(data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  };
  return (
    <>
      <BackButton />
      <Title>{`${detail.name}의 이야기`}</Title>
      <Container>
        <SubTitle>{detail.title}</SubTitle>
        <Img>
          <div><img src={detail.image} alt="" /></div>
        </Img>
        {/* <Writer>{detail.name}</Writer> */}
        <Content>{detail.contents}</Content>
      </Container>
    </>
  );
};

export default FailureDetailPage;
const Img = styled.div`
  margin: 20px auto;
  width: 100%;
  flex-shrink: 0;
  border-radius: 5px;
  div {
    display: flex;
    flex-direction: row;
    justify-items: center;
  }
  img {
    min-width: 40%;
    margin: auto;
  }
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
  text-align: center;
  margin: auto;
  width: 283px;
  flex-shrink: 0;
  color: #000000;
  font-family: Noto Sans KR;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 32px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Content = styled.div`
  margin: auto;
  width: 306px;
  max-height: 263px;
  padding: 15px;
  flex-shrink: 0;
  color: #3a3a3a;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  overflow: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  margin: auto;
  margin-top: 42px;
  width: 349px;
  height: 600px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #d2e8ef;
  box-shadow: 0px 0px 10px 0px #d2e8ef;
`;
