import React from "react";
import BackButton from "../components/BackButton";
import PromoItem from "../components/Promo/PromoItem";
import { styled } from "styled-components";
import lecture from "../assets/Promo/lecture.png";
import video from "../assets/Promo/video.png";
import web from "../assets/Promo/web.png";
import book from "../assets/Promo/book.png";
const PromoPage = () => {
  const promoList = [
    {
      isEven: false,
      img: video,
      type: "영상",
    },
    {
      isEven: true,
      img: lecture,
      type: "강연",
    },
    {
      isEven: false,
      img: web,
      type: "웹",
    },
    {
      isEven: true,
      img: book,
      type: "도서",
    },
  ];
  return (
    <div>
      <BackButton />
      <Title>당신을 도울 컨텐츠</Title>
      {promoList.map((item) => {
        return (
          <PromoItem isEven={item.isEven} img={item.img} type={item.type} />
        );
      })}
    </div>
  );
};

export default PromoPage;

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
