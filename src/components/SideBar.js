import React from "react";
import { styled } from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <Layer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></Layer>
      <Modal>
        <img src={logo} alt="" />
        <p>Back mirror</p>
        <div>
          <Item
            onClick={() => {
              setIsOpen(!isOpen);
              navigate("/myfails");
            }}
          >
            나의 실패 목록
          </Item>
          <Item
            onClick={() => {
              setIsOpen(!isOpen);
              navigate("/failures");
            }}
          >
            유명인 실패담 보러가기
          </Item>
          <Item
            onClick={() => {
              setIsOpen(!isOpen);
              navigate("/promotion");
            }}
          >
            홍보 게시판
          </Item>
          <Item
            onClick={() => {
              setIsOpen(!isOpen);
              navigate("/");
            }}
          >
            홈
          </Item>
        </div>
      </Modal>
    </>
  );
};

export default SideBar;

const Item = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  justify-content: start;
  align-items: center;
`;
const Layer = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Modal = styled.div`
  border-radius: 13px;
  background: rgba(164, 210, 224, 0.38);
  backdrop-filter: blur(40.774227142333984px);
  width: 50%;
  height: 50%;

  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0%;
  right: 0%;
  transform: translate(0%, 0%);
  div {
    width: 90%;
    background: var(--system-background-light-primary, #fff);
    color: var(--label-color-light-primary, #000);
    border-radius: 15px;
  }
  p {
    color: var(--label-color-light-primary, #000);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
    letter-spacing: -0.24px;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;
