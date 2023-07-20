import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import PromoItem from "../components/Promo/PromoItem";
import { styled } from "styled-components";
import lecture from "../assets/Promo/lecture.png";
import video from "../assets/Promo/video.png";
import web from "../assets/Promo/web.png";
import book from "../assets/Promo/book.png";
import SideBar from "../components/SideBar";
import sideBar from "../assets/sideBar.png";
import { useState } from "react";

const PromoPage = () => {
  const promoList = [
    {
      isEven: false,
      img: video,
      type: "영상",
      link: "https://www.youtube.com/watch?v=GHDBDf7XoYw",
    },
    {
      isEven: true,
      img: lecture,
      type: "강연",
      link: "https://youtu.be/wZP1vh4NQ_E",
    },
    {
      isEven: false,
      img: web,
      type: "웹",
      link: "https://www.hankookilbo.com/Collect/8186",
    },
    {
      isEven: true,
      img: book,
      type: "도서",
      link: "https://www.yes24.com/Product/Goods/11394697",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
      <Title>당신을 도울 컨텐츠</Title>
      {promoList.map((item) => {
        return (
          <PromoItem
            key={item.type}
            isEven={item.isEven}
            img={item.img}
            type={item.type}
            link={item.link}
          />
        );
      })}
    </div>
  );
};

export default PromoPage;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  margin: auto;
  margin-bottom: 42px;
  width: 283px;
  color: #6db3d9;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 37.4px */
  letter-spacing: 0.22px;
`;

const Btn = styled.div`
  margin-top: 15px;
  margin-right: 10px;
  img {
    width: 45px;
  }
`;
