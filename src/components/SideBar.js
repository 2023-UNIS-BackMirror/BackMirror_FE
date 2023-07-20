import React from "react";
import { styled } from "styled-components";
const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Layer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></Layer>
      <Modal />
    </>
  );
};

export default SideBar;
const Layer = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Modal = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0%;
  right: 0%;
  transform: translate(0%, 0%);
`;
