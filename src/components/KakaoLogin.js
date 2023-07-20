import React from "react";
import "./style.css";

export const KakaoLogin = ({ className }) => {
  return (
    <div className={`kakao-login ${className}`}>
      <img className="kako-vector" alt="Kako vector" src="/img/kako-vector.svg" />
      <div className="element">카카오 로그인</div>
    </div>
  );
};
const converted = {
    ".kakao-login": {
      backgroundColor: "#fee500",
      borderRadius: "7px",
      boxShadow: "0px 4px 6px #00000040",
      height: "48px",
      position: "relative",
      width: "320px"
    },
    ".kakao-login .kako-vector": {
      height: "17px",
      left: "15px",
      position: "absolute",
      top: "16px",
      width: "18px"
    },
    ".kakao-login .element": {
      color: "#000000",
      fontFamily: "var(--bold-16-font-family)",
      fontSize: "var(--bold-16-font-size)",
      fontStyle: "var(--bold-16-font-style)",
      fontWeight: "var(--bold-16-font-weight)",
      left: "117px",
      letterSpacing: "var(--bold-16-letter-spacing)",
      lineHeight: "var(--bold-16-line-height)",
      position: "absolute",
      textAlign: "center",
      top: "14px",
      whiteSpace: "nowrap"
    }
  }
  