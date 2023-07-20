import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import FailDetail from "../components/MyFail/FailDetail";
import sideBar from "../assets/sideBar.png";
import SideBar from "../components/SideBar";
import { GetMyFailDetail } from "../api/post";
import { useParams } from "react-router-dom";

const MyFailDetailPage = () => {
  const [detail, setDetail] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      //프로미스 해결 및 데이터 접근
      setDetail(await GetMyFailDetail(postId));
    } catch (error) {
      console.log("에러 발생", error);
    }
  };

  return (
    <>
      <Header>
        <BackButton />
        <Btn
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={sideBar} alt="" />
        </Btn>
        {isOpen ? <SideBar isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      </Header>
      <Title>나의 실패 목록</Title>
      <Container>
        {detail &&
          detail.qnaList[0] &&
          detail.qnaList.map((item) => {
            return (
              <FailDetail
                postId={detail.postId}
                type={detail.type}
                key={detail.postId}
                message={detail.message}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
      </Container>
    </>
  );
};

export default MyFailDetailPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Btn = styled.div`
  margin-top: 15px;
  margin-right: 10px;
  img {
    width: 45px;
  }
`;
const Container = styled.div`
  margin-top: 33px;
`;
const Title = styled.div`
  margin: auto;
  margin-top: 3px;
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
