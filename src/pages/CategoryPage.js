import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import mirror from "../assets/mirror.png";
import { useNavigate } from "react-router-dom";
const CategoryPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <BackButton />
      </Header>
      <Title>실패 카테고리</Title>
      <Container>
        <Item
          onClick={() => {
            navigate(`/qna/relationship`);
          }}
        >
          <img src={mirror} alt="" />
          <p>인간 관계</p>
        </Item>
        <Item
          onClick={() => {
            navigate(`/qna/study`);
          }}
        >
          <img src={mirror} alt="" />
          <p>전공 및 학업</p>
        </Item>
        <Item
          onClick={() => {
            navigate(`/qna/activity`);
          }}
        >
          <img src={mirror} alt="" />
          <p> 대외 활동</p>
        </Item>
        <Item
          onClick={() => {
            navigate(`/qna/job`);
          }}
        >
          <img src={mirror} alt="" />
          <p>취업</p>
        </Item>
        <Item
          onClick={() => {
            navigate(`/qna/money`);
          }}
        >
          <img src={mirror} alt="" />
          <p>금전</p>
        </Item>
      </Container>
    </>
  );
};

export default CategoryPage;
const Item = styled.div`
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  background-size: cover;
  img {
    width: 250px;
    height: 60px;
  }
  p {
    color: #9b9b9b;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
