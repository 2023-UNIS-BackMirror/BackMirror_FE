import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import home from "../assets/home.png";
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
        <p>
          {" "}
          onClick =
          {() => {
            navigate("/category");
          }}
          실패 기록하러 가기 &gt;
        </p>
      </Container>
    </>
  );
};

export default Home;
const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 358px;
    height: 480px;
  }
  p {
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
  margin-top: 15px;
  margin-right: 10px;
  img {
    width: 45px;
  }
`;
