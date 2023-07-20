import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackButton from "../components/BackButton";
import Failure from "../components/Failures/Failure";
import { getInterviewList } from "../api/famous";

const FailuresPage = () => {
  const [list, setList] = useState([]);

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
      <BackButton />
      <Title>당신도 할 수 있어요!</Title>
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
