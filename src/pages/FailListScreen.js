import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const Screen = () => {
  const navigate = useNavigate();
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap">
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
        </div>
        <div className="overlap-2">
          <div className="text-wrapper">실패</div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-2">2023년 07월 19일</div>
              <div className="text-wrapper-3">실패&nbsp;&nbsp;1</div>
              <p className="p">
                <span className="span">
                  실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구{" "}
                </span>
                <span className="text-wrapper-4">답변 어쩌구 저쩌구</span>
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <img className="vector" alt="Vector" src="image.svg" />
          <img className="img" alt="Vector" src="vector-2.svg" />
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-5">실패</div>
          <div className="overlap-wrapper">
            <div className="overlap-6">
              <div className="text-wrapper-2">2023년 07월 20일</div>
              <div className="text-wrapper-3">실패 2</div>
              <p className="p">
                <span className="span">
                  실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구{" "}
                </span>
                <span className="text-wrapper-4">답변 어쩌구 저쩌구</span>
              </p>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-7">
              <div className="text-wrapper-2">2023년 07월 20일</div>
              <div className="text-wrapper-3">실패 2</div>
              <p className="p">
                <span className="span">
                  실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구{" "}
                </span>
                <span className="text-wrapper-4">답변 어쩌구 저쩌구</span>
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <p className="text-wrapper-6">
            어쩌구 저쩌구한 실패를 했다 어쩌구 저쩌구한 실패를 했다 어쩌구 저쩌구한 실패를 했다
          </p>
          <div className="overlap-group-wrapper">
            <div className="overlap-9">
              <div className="text-wrapper-2">2023년 07월 21일</div>
              <div className="text-wrapper-3">실패&nbsp;&nbsp;3</div>
              <p className="p">
                <span className="span">
                  실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구 실패 어쩌구 저쩌구{" "}
                </span>
                <span className="text-wrapper-4">답변 어쩌구 저쩌구</span>
              </p>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="vector-3.svg" />
        <h1 className="h-1">실패 목록</h1>
        <img className="union" alt="Union" src="union.svg" />
        <img className="icon-hamburger" alt="Icon hamburger" src="icon-hamburger-button.png" />
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
    ".screen .overlap": {
      height: "18px",
      left: "16px",
      position: "absolute",
      top: "10px",
      width: "363px"
    },
    ".screen .group": {
      height: "18px",
      left: "0",
      position: "absolute",
      top: "0",
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
    ".screen .overlap-2": {
      height: "127px",
      left: "13px",
      position: "absolute",
      top: "165px",
      width: "369px"
    },
    ".screen .text-wrapper": {
      color: "#ffffff",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "15px",
      fontWeight: 700,
      left: "26px",
      letterSpacing: "0.15px",
      lineHeight: "25.5px",
      position: "absolute",
      top: "9px",
      whiteSpace: "nowrap"
    },
    ".screen .overlap-wrapper": {
      height: "127px",
      left: "0",
      position: "absolute",
      top: "0",
      width: "369px"
    },
    ".screen .overlap-3": {
      backgroundImage: "url(./rectangle-48.png)",
      backgroundSize: "100% 100%",
      height: "147px",
      left: "-10px",
      position: "relative",
      top: "-10px",
      width: "383px"
    },
    ".screen .text-wrapper-2": {
      color: "#ffffff",
      fontFamily: '"Noto Sans KR-Regular", Helvetica',
      fontSize: "11px",
      fontWeight: 400,
      left: "260px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "114px"
    },
    ".screen .text-wrapper-3": {
      color: "#ffffff",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "15px",
      fontWeight: 700,
      left: "38px",
      letterSpacing: "0.15px",
      lineHeight: "25.5px",
      position: "absolute",
      top: "18px",
      whiteSpace: "nowrap"
    },
    ".screen .p": {
      color: "#ffffff",
      fontFamily: '"Noto Sans KR-Medium", Helvetica',
      fontSize: "13px",
      fontWeight: 400,
      left: "38px",
      letterSpacing: "0.13px",
      lineHeight: "22.1px",
      position: "absolute",
      top: "53px",
      width: "270px"
    },
    ".screen .span": { fontWeight: 500 },
    ".screen .text-wrapper-4": {
      fontFamily: '"Noto Sans KR-Regular", Helvetica'
    },
    ".screen .overlap-4": {
      backgroundImage: "url(./vector.svg)",
      backgroundSize: "100% 100%",
      height: "49px",
      left: "324px",
      position: "absolute",
      top: "733px",
      width: "47px"
    },
    ".screen .vector": {
      height: "23px",
      left: "22px",
      position: "absolute",
      top: "13px",
      width: "4px"
    },
    ".screen .img": {
      height: "4px",
      left: "12px",
      position: "absolute",
      top: "22px",
      width: "23px"
    },
    ".screen .overlap-5": {
      height: "152px",
      left: "13px",
      position: "absolute",
      top: "320px",
      width: "369px"
    },
    ".screen .text-wrapper-5": {
      color: "#ffffff",
      fontFamily: '"Noto Sans KR-Bold", Helvetica',
      fontSize: "15px",
      fontWeight: 700,
      left: "26px",
      letterSpacing: "0.15px",
      lineHeight: "25.5px",
      position: "absolute",
      top: "126px",
      whiteSpace: "nowrap"
    },
    ".screen .overlap-6": {
      backgroundImage: "url(./rectangle-48-2.png)",
      backgroundSize: "100% 100%",
      height: "147px",
      left: "-10px",
      position: "relative",
      top: "-10px",
      width: "383px"
    },
    ".screen .overlap-7": {
      backgroundImage: "url(./rectangle-48-3.png)",
      backgroundSize: "100% 100%",
      height: "147px",
      left: "-10px",
      position: "relative",
      top: "-10px",
      width: "383px"
    },
    ".screen .overlap-8": {
      height: "136px",
      left: "13px",
      position: "absolute",
      top: "481px",
      width: "369px"
    },
    ".screen .text-wrapper-6": {
      color: "#ffffff",
      fontFamily: '"Noto Sans KR-Medium", Helvetica',
      fontSize: "13px",
      fontWeight: 500,
      left: "26px",
      letterSpacing: "0.13px",
      lineHeight: "22.1px",
      position: "absolute",
      top: "0",
      width: "270px"
    },
    ".screen .overlap-group-wrapper": {
      height: "127px",
      left: "0",
      position: "absolute",
      top: "9px",
      width: "369px"
    },
    ".screen .overlap-9": {
      backgroundImage: "url(./image.png)",
      backgroundSize: "100% 100%",
      height: "147px",
      left: "-10px",
      position: "relative",
      top: "-10px",
      width: "383px"
    },
    ".screen .vector-2": {
      height: "15px",
      left: "340px",
      position: "absolute",
      top: "130px",
      width: "15px"
    },
    ".screen .h-1": {
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
    ".screen .union": {
      height: "24px",
      left: "25px",
      position: "absolute",
      top: "80px",
      width: "25px"
    },
    ".screen .icon-hamburger": {
      height: "42px",
      left: "325px",
      position: "absolute",
      top: "71px",
      width: "45px"
    }
  }
  
