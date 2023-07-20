import React from "react";
import { KakaoLogin } from "./KakaoLogin";
import "./style.css";

export const Splash = () => {
  return (
    <div className="splash">
      <div className="div">
        <div className="overlap">
          <div className="gradient-blobs">
            <div className="overlap-group">
              <div className="element-2" />
              <div className="element-3" />
              <div className="gradient-blobs-2">
                <div className="overlap-group-2">
                  <div className="element-4" />
                  <div className="element-5" />
                </div>
                <div className="element-6" />
              </div>
            </div>
            <div className="element-7" />
          </div>
          <img className="back-mirror" alt="Back mirror" src="back-mirror.png" />
          <img className="zodiac-sign" alt="Zodiac sign" src="zodiac-12-sign-astrology-stars-space-cancer.png" />
          <KakaoLogin className="kakao-login-instance" kakoVector="image.svg" />
        </div>
        <div className="group">
          <div className="group-2">
            <div className="tower">4G</div>
            <div className="network">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
            </div>
            <div className="battery-normal">
              <div className="rectangle-wrapper">
                <div className="rectangle-5" />
              </div>
              <div className="rectangle-6" />
            </div>
            <div className="time">08:34</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const converted = {
    ".splash": {
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%"
    },
    ".splash .div": {
      backgroundColor: "#ffffff",
      border: "1px none",
      height: "844px",
      overflow: "hidden",
      position: "relative",
      width: "390px"
    },
    ".splash .overlap": {
      height: "990px",
      left: "-287px",
      position: "absolute",
      top: "79px",
      width: "991px"
    },
    ".splash .gradient-blobs": {
      height: "678px",
      left: "134px",
      opacity: 0.5,
      position: "absolute",
      top: "156px",
      transform: "rotate(135.83deg)",
      width: "723px"
    },
    ".splash .overlap-group": {
      height: "780px",
      left: "47px",
      position: "absolute",
      top: "-102px",
      width: "789px"
    },
    ".splash .element-2": {
      backgroundColor: "#a4d2e0",
      borderRadius: "214.29px/201.25px",
      filter: "blur(470.59px)",
      height: "402px",
      left: "178px",
      position: "absolute",
      top: "179px",
      transform: "rotate(28.3deg)",
      width: "429px"
    },
    ".splash .element-3": {
      background:
        "linear-gradient(180deg, rgb(109, 179, 217) 0%, rgb(164, 210, 224) 100%)",
      borderRadius: "219.29px/209.96px",
      filter: "blur(687.07px)",
      height: "420px",
      left: "62px",
      position: "absolute",
      top: "284px",
      transform: "rotate(65.64deg)",
      width: "439px"
    },
    ".splash .gradient-blobs-2": {
      height: "527px",
      left: "281px",
      opacity: 0.5,
      position: "absolute",
      top: "0",
      width: "508px"
    },
    ".splash .overlap-group-2": {
      height: "510px",
      left: "28px",
      position: "absolute",
      top: "6px",
      width: "491px"
    },
    ".splash .element-4": {
      backgroundColor: "#a4d2e0",
      borderRadius: "154.23px/153.07px",
      filter: "blur(470.59px)",
      height: "306px",
      left: "126px",
      position: "absolute",
      top: "57px",
      transform: "rotate(30.77deg)",
      width: "308px"
    },
    ".splash .element-5": {
      background:
        "linear-gradient(180deg, rgb(109, 179, 217) 0%, rgb(164, 210, 224) 100%)",
      borderRadius: "167.66px/150.24px",
      filter: "blur(687.07px)",
      height: "300px",
      left: "35px",
      position: "absolute",
      top: "148px",
      transform: "rotate(67.73deg)",
      width: "335px"
    },
    ".splash .element-6": {
      background:
        "linear-gradient(180deg, rgb(210, 232, 239) 0%, rgb(109, 179, 217) 100%)",
      borderRadius: "130.37px/116.03px",
      filter: "blur(545.89px)",
      height: "232px",
      left: "-234px",
      position: "absolute",
      top: "-270px",
      transform: "rotate(122.98deg)",
      width: "261px"
    },
    ".splash .element-7": {
      background:
        "linear-gradient(180deg, rgb(210, 232, 239) 0%, rgb(109, 179, 217) 100%)",
      borderRadius: "173.31px/159.27px",
      filter: "blur(545.89px)",
      height: "319px",
      left: "-321px",
      position: "absolute",
      top: "-358px",
      transform: "rotate(125.67deg)",
      width: "347px"
    },
    ".splash .back-mirror": {
      height: "81px",
      left: "422px",
      position: "absolute",
      top: "414px",
      width: "122px"
    },
    ".splash .zodiac-sign": {
      height: "160px",
      left: "402px",
      position: "absolute",
      top: "188px",
      width: "160px"
    },
    ".splash .kakao-login-instance": {
      boxShadow: "unset !important",
      left: "322px !important",
      position: "absolute !important",
      top: "605px !important"
    },
    ".splash .group": {
      height: "18px",
      left: "16px",
      position: "absolute",
      top: "10px",
      width: "359px"
    },
    ".splash .group-2": { height: "18px", position: "relative", width: "363px" },
    ".splash .tower": {
      color: "#000000",
      fontFamily: '"SF Compact Display-Semibold", Helvetica',
      fontSize: "13px",
      fontWeight: 400,
      left: "310px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "2px",
      whiteSpace: "nowrap",
      width: "17px"
    },
    ".splash .network": {
      height: "10px",
      left: "287px",
      position: "absolute",
      top: "5px",
      width: "17px"
    },
    ".splash .rectangle": {
      backgroundColor: "#000000",
      height: "4px",
      left: "0",
      position: "absolute",
      top: "6px",
      width: "3px"
    },
    ".splash .rectangle-2": {
      backgroundColor: "#000000",
      height: "6px",
      left: "5px",
      position: "absolute",
      top: "4px",
      width: "3px"
    },
    ".splash .rectangle-3": {
      backgroundColor: "#000000",
      height: "8px",
      left: "10px",
      position: "absolute",
      top: "2px",
      width: "3px"
    },
    ".splash .rectangle-4": {
      backgroundColor: "#000000",
      height: "10px",
      left: "15px",
      opacity: 0.3,
      position: "absolute",
      top: "0",
      width: "3px"
    },
    ".splash .battery-normal": {
      height: "10px",
      left: "333px",
      position: "absolute",
      top: "5px",
      width: "26px"
    },
    ".splash .rectangle-wrapper": {
      border: "0.87px solid",
      borderColor: "#000000",
      borderRadius: "2.61px",
      height: "10px",
      left: "0",
      position: "absolute",
      top: "0",
      width: "23px"
    },
    ".splash .rectangle-5": {
      backgroundColor: "#fdd015",
      borderRadius: "0.87px",
      height: "7px",
      left: "1px",
      position: "relative",
      top: "1px",
      width: "11px"
    },
    ".splash .rectangle-6": {
      backgroundColor: "#000000",
      borderRadius: "3.48px",
      height: "4px",
      left: "24px",
      position: "absolute",
      top: "3px",
      width: "2px"
    },
    ".splash .time": {
      color: "#000000",
      fontFamily: '"SF Compact Display-Semibold", Helvetica',
      fontSize: "15.1px",
      fontWeight: 400,
      left: "0",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "0",
      width: "43px"
    }
  }
  