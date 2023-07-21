import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Back
      onClick={() => {
        navigate(-1);
      }}
    >
      {"<"}
    </Back>
  );
};

export default BackButton;

const Back = styled.div`
<<<<<<< HEAD
  cursor: pointer;
=======
>>>>>>> f30406b8d8bf6ba3922566eba2a7b83b32ace61a
  margin-top: 15px;
  margin-left: 10px;
  color: #6db3d9;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
