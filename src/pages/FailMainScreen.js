import React from "react";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="group">
          <div className="tower">4G</div>
          <div className="network">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
          <div className="battery-normal">
            <div className="overlap-group">
              <div className="rectangle-5" />
            </div>
            <div className="rectangle-6" />
          </div>
          <div className="time">08:34</div>
        </div>
        <img className="union" alt="Union" src="union.svg" />
        <h1 className="text-wrapper">실패 카테고리</h1>
        <div className="view">
          <div className="overlap">
            <img className="img" alt="Rectangle" src="rectangle-49.svg" />
            <img className="rectangle-7" alt="Rectangle" src="rectangle-50.svg" />
            <img className="rectangle-8" alt="Rectangle" src="rectangle-51.svg" />
            <div className="text-wrapper-2">인간 관계</div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-3">전공 및 학업</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">취업</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-5">대외활동</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-6">금전</div>
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
      position: "relative",
      width: "390px"
    },
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
    ".screen .overlap-group": {
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
    },
    ".screen .union": {
      height: "24px",
      left: "25px",
      position: "absolute",
      top: "80px",
      width: "25px"
    },
    ".screen .text-wrapper": {
      color: "#303030",
      fontFamily: '"Montserrat-SemiBold", Helvetica',
      fontSize: "24px",
      fontWeight: 600,
      left: "63px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "79px"
    },
    ".screen .view": {
      boxShadow: "0px 4px 4px #00000040",
      height: "85px",
      left: "58px",
      position: "absolute",
      top: "161px",
      width: "252px"
    },
    ".screen .overlap": {
      height: "85px",
      left: "10px",
      position: "relative",
      width: "230px"
    },
    ".screen .img": {
      height: "59px",
      left: "0",
      position: "absolute",
      top: "13px",
      width: "230px"
    },
    ".screen .rectangle-7": {
      height: "4px",
      left: "73px",
      position: "absolute",
      top: "72px",
      width: "82px"
    },
    ".screen .rectangle-8": {
      height: "15px",
      left: "108px",
      position: "absolute",
      top: "0",
      width: "14px"
    },
    ".screen .text-wrapper-2": {
      color: "#9b9b9b",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "20px",
      fontWeight: 700,
      left: "76px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "27px"
    },
    ".screen .div-wrapper": {
      backgroundImage: "url(./image.png)",
      backgroundSize: "100% 100%",
      height: "84px",
      left: "58px",
      position: "absolute",
      top: "279px",
      width: "250px"
    },
    ".screen .text-wrapper-3": {
      color: "#9b9b9b",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "20px",
      fontWeight: 700,
      left: "74px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "26px"
    },
    ".screen .overlap-2": {
      backgroundImage: "url(./image-2.png)",
      backgroundSize: "100% 100%",
      height: "84px",
      left: "59px",
      position: "absolute",
      top: "527px",
      width: "250px"
    },
    ".screen .text-wrapper-4": {
      color: "#9b9b9b",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "20px",
      fontWeight: 700,
      left: "106px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "28px"
    },
    ".screen .overlap-3": {
      backgroundImage: "url(./image-3.png)",
      backgroundSize: "100% 100%",
      height: "84px",
      left: "58px",
      position: "absolute",
      top: "408px",
      width: "250px"
    },
    ".screen .text-wrapper-5": {
      color: "#9b9b9b",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "20px",
      fontWeight: 700,
      left: "88px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "27px"
    },
    ".screen .overlap-4": {
      backgroundImage: "url(./image-4.png)",
      backgroundSize: "100% 100%",
      height: "84px",
      left: "58px",
      position: "absolute",
      top: "645px",
      width: "250px"
    },
    ".screen .text-wrapper-6": {
      color: "#9b9b9b",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "20px",
      fontWeight: 700,
      left: "107px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "28px"
    }
  }
  