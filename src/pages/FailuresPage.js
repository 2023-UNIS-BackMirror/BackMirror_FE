import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import Failure from "../components/Failures/Failure";
import { getInterviewList } from "../api/famous";
import sideBar from "../assets/sideBar.png";
import SideBar from "../components/SideBar";

const FailuresPage = () => {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      //프로미스 해결 및 데이터 접근
      setList(await getInterviewList());
    } catch (error) {
      console.log("에러 발생", error);
    }
  };

  return (
    <>
      <Header>
        <BackButton />
        <MenuTitle>
          <p>당신도 할 수 있어요!</p>
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
        {list &&
          list.map((item) => {
            return (
              <Failure
                id={item.id}
                key={item.id}
                isEven={item.id % 2 === 1}
                name={item.name}
                contents={item.contents}
                image={item.image}
              />
            );
          })}
      </Container>
    </>
  );
};

export default FailuresPage;
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
  margin-top: 30px;
  cursor: poitner;
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

