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
        <MenuTitle>
          <p>당신을 도울 컨텐츠</p>
        </MenuTitle>        
        <Btn
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={sideBar} alt="" />
        </Btn>
        {isOpen ? <SideBar isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      </Header>

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
  margin-bottom: 40px;
`;
const Btn = styled.div`
  cursor: pointer;
  margin-top: 15px;
  margin-right: 10px;
  img {
    width: 45px;
  }
`;
const MenuTitle = styled.div`
  cursor: pointer;
  margin-top: 5px;
  color: #6DB3D9;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
