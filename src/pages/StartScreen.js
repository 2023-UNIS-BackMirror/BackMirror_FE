import React from "react";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap">
          <div className="gradient-blobs">
            <div className="overlap-group">
              <div className="element" />
              <div className="element-2" />
            </div>
            <div className="element-3" />
          </div>
          <div className="notification-action">
            <div className="bottom-divider" />
            <p className="dismiss">
              <span className="text-wrapper">“오늘 하루,</span>
              <span className="span"> 실패</span>
              <span className="text-wrapper">
                라고
                <br />
                느낄만한 일들이 있었나요?”
                <br />
                <br />
                함께 나누며
                <br />
                미래의{" "}
              </span>
              <span className="span">용기</span>
              <span className="text-wrapper">를 배워가요.</span>
            </p>
          </div>
        </div>
        <div className="group">
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
  );
};
const converted = {
    ".screen": {
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%"
    },
    ".screen .div": {
      backgroundColor: "#ffffff",
      border: "1px none",
      height: "844px",
      overflow: "hidden",
      position: "relative",
      width: "390px"
    },
    ".screen .overlap": {
      height: "663px",
      left: "-137px",
      position: "absolute",
      top: "39px",
      width: "663px"
    },
    ".screen .gradient-blobs": {
      height: "476px",
      left: "100px",
      opacity: 0.5,
      position: "absolute",
      top: "94px",
      transform: "rotate(135.83deg)",
      width: "462px"
    },
    ".screen .overlap-group": {
      height: "462px",
      left: "26px",
      position: "absolute",
      top: "5px",
      width: "446px"
    },
    ".screen .element": {
      backgroundColor: "#a4d2e0",
      borderRadius: "140.11px/138.43px",
      filter: "blur(470.59px)",
      height: "277px",
      left: "115px",
      position: "absolute",
      top: "52px",
      transform: "rotate(30.57deg)",
      width: "280px"
    },
    ".screen .element-2": {
      background:
        "linear-gradient(180deg, rgb(109, 179, 217) 0%, rgb(164, 210, 224) 100%)",
      borderRadius: "151.56px/136.55px",
      filter: "blur(687.07px)",
      height: "273px",
      left: "32px",
      position: "absolute",
      top: "133px",
      transform: "rotate(67.56deg)",
      width: "303px"
    },
    ".screen .element-3": {
      background:
        "linear-gradient(180deg, rgb(210, 232, 239) 0%, rgb(109, 179, 217) 100%)",
      borderRadius: "118px/105.29px",
      filter: "blur(545.89px)",
      height: "211px",
      left: "-213px",
      position: "absolute",
      top: "-245px",
      transform: "rotate(123.2deg)",
      width: "236px"
    },
    ".screen .notification-action": {
      backgroundColor: "#a4d2e0",
      borderRadius: "100px 100px 5px 100px",
      boxShadow: "0px 4px 4px #00000040",
      height: "276px",
      left: "170px",
      position: "absolute",
      top: "194px",
      width: "324px"
    },
    ".screen .bottom-divider": {
      backgroundColor: "#11111180",
      height: "1px",
      left: "0",
      opacity: 0.5,
      position: "absolute",
      top: "276px",
      transform: "rotate(180deg)",
      width: "324px"
    },
    ".screen .dismiss": {
      color: "transparent",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "22px",
      fontWeight: 700,
      height: "160px",
      left: "16px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      textAlign: "center",
      top: "58px",
      width: "292px"
    },
    ".screen .text-wrapper": { color: "#ffffff" },
    ".screen .span": { color: "#2a5ca7" },
    ".screen .group": {
      height: "18px",
      left: "16px",
      position: "absolute",
      top: "10px",
      width: "363px"
    },
    ".screen .tower": {
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
    ".screen .network": {
      height: "10px",
      left: "287px",
      position: "absolute",
      top: "5px",
      width: "17px"
    },
    ".screen .rectangle": {
      backgroundColor: "#000000",
      height: "4px",
      left: "0",
      position: "absolute",
      top: "6px",
      width: "3px"
    },
    ".screen .rectangle-2": {
      backgroundColor: "#000000",
      height: "6px",
      left: "5px",
      position: "absolute",
      top: "4px",
      width: "3px"
    },
    ".screen .rectangle-3": {
      backgroundColor: "#000000",
      height: "8px",
      left: "10px",
      position: "absolute",
      top: "2px",
      width: "3px"
    },
    ".screen .rectangle-4": {
      backgroundColor: "#000000",
      height: "10px",
      left: "15px",
      opacity: 0.3,
      position: "absolute",
      top: "0",
      width: "3px"
    },
    ".screen .battery-normal": {
      height: "10px",
      left: "333px",
      position: "absolute",
      top: "5px",
      width: "26px"
    },
    ".screen .rectangle-wrapper": {
      border: "0.87px solid",
      borderColor: "#000000",
      borderRadius: "2.61px",
      height: "10px",
      left: "0",
      position: "absolute",
      top: "0",
      width: "23px"
    },
    ".screen .rectangle-5": {
      backgroundColor: "#fdd015",
      borderRadius: "0.87px",
      height: "7px",
      left: "1px",
      position: "relative",
      top: "1px",
      width: "11px"
    },
    ".screen .rectangle-6": {
      backgroundColor: "#000000",
      borderRadius: "3.48px",
      height: "4px",
      left: "24px",
      position: "absolute",
      top: "3px",
      width: "2px"
    },
    ".screen .time": {
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
  