/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

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
