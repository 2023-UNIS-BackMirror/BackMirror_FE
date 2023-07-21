import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import sideBar from "../assets/sideBar.png";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <BackButton />
        <MenuTitle>
          <p onClick ={() => {navigate("/");}}>Back Mirror</p>
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
      <Container>
        <img src={home} alt="" />
        <p onClick =
          {() => {
            navigate("/category");
          }}>          
          실패 기록하러 가기 &gt;
        </p>
      </Container>
    </>
  );
};

export default Home;
const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 358px;
    height: 480px;
  }
  p {
    cursor: pointer;
    margin-top: 50px;
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Btn = styled.div`
  cursor: pointer;
  margin-top: 25px;
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
