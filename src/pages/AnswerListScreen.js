import React from "react";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div">
        <div className="overlap">
          <h1 className="text-wrapper"># N번째 실패 기록</h1>
          <div className="text-wrapper"># N번째 실패 기록</div>
        </div>
        <div className="text-wrapper-2">삭제하기</div>
        <div className="overlap-group">
          <div className="text-wrapper-3">응원 메세지 출력하기 &gt;</div>
          <div className="text-wrapper-4">응원 부적 출력하기 &gt;</div>
        </div>
        <div className="text-wrapper-5">&lt;</div>
        <div className="group">
          <div className="overlap-group-2">
            <p className="p">질문 1. 어쩌구 저쩌구 ?</p>
            <p className="p-2">
              <span className="span">
                답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구{" "}
              </span>
              <span className="text-wrapper-6">답변 어쩌구 저쩌구</span>
            </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <p className="p">질문 1. 어쩌구 저쩌구 ?</p>
            <p className="p-2">
              <span className="span">
                답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구{" "}
              </span>
              <span className="text-wrapper-6">답변 어쩌구 저쩌구</span>
            </p>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-3">
            <p className="p">질문 2. 어쩌구 저쩌구 ?</p>
            <p className="p-2">
              <span className="span">
                답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구 답변 어쩌구 저쩌구{" "}
              </span>
              <span className="text-wrapper-6">답변 어쩌구 저쩌구</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const converted = {
  ".element": {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  ".element .div": {
    backgroundColor: "#ffffff",
    border: "1px none",
    height: "844px",
    overflow: "hidden",
    position: "relative",
    width: "390px"
  },
  ".element .overlap": {
    height: "41px",
    left: "25px",
    position: "absolute",
    top: "67px",
    width: "186px"
  },
  ".element .text-wrapper": {
    color: "#000000",
    fontFamily: '"Noto Sans KR-Bold", Helvetica',
    fontSize: "24px",
    fontWeight: 700,
    left: "0",
    letterSpacing: "0.24px",
    lineHeight: "40.8px",
    position: "absolute",
    top: "0",
    whiteSpace: "nowrap"
  },
  ".element .text-wrapper-2": {
    color: "#ff7070",
    fontFamily: '"Inter-Regular", Helvetica',
    fontSize: "16px",
    fontWeight: 400,
    left: "299px",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "absolute",
    top: "110px",
    whiteSpace: "nowrap",
    width: "111px"
  },
  ".element .overlap-group": {
    height: "63px",
    left: "125px",
    position: "absolute",
    top: "731px",
    width: "259px"
  },
  ".element .text-wrapper-3": {
    color: "#000000",
    fontFamily: '"Inter-SemiBold", Helvetica',
    fontSize: "15px",
    fontWeight: 600,
    left: "0",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "absolute",
    top: "28px",
    width: "253px"
  },
  ".element .text-wrapper-4": {
    color: "#000000",
    fontFamily: '"Inter-SemiBold", Helvetica',
    fontSize: "15px",
    fontWeight: 600,
    left: "6px",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "absolute",
    top: "0",
    width: "253px"
  },
  ".element .text-wrapper-5": {
    color: "#6db3d9",
    fontFamily: '"Inter-Regular", Helvetica',
    fontSize: "40px",
    fontWeight: 400,
    left: "19px",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "absolute",
    top: "14px",
    whiteSpace: "nowrap"
  },
  ".element .group": {
    height: "127px",
    left: "13px",
    position: "absolute",
    top: "165px",
    width: "367px"
  },
  ".element .overlap-group-2": {
    backgroundImage: "url(./rectangle-48.png)",
    backgroundSize: "100% 100%",
    height: "147px",
    left: "-10px",
    position: "relative",
    top: "-10px",
    width: "383px"
  },
  ".element .p": {
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
  ".element .p-2": {
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
  ".element .span": { fontWeight: 500 },
  ".element .text-wrapper-6": {
    fontFamily: '"Noto Sans KR-Regular", Helvetica'
  },
  ".element .overlap-wrapper": {
    height: "127px",
    left: "13px",
    position: "absolute",
    top: "475px",
    width: "367px"
  },
  ".element .overlap-2": {
    backgroundImage: "url(./rectangle-48-2.png)",
    backgroundSize: "100% 100%",
    height: "147px",
    left: "-10px",
    position: "relative",
    top: "-10px",
    width: "383px"
  },
  ".element .overlap-group-wrapper": {
    height: "127px",
    left: "13px",
    position: "absolute",
    top: "320px",
    width: "367px"
  },
  ".element .overlap-3": {
    backgroundImage: "url(./image.png)",
    backgroundSize: "100% 100%",
    height: "147px",
    left: "-10px",
    position: "relative",
    top: "-10px",
    width: "383px"
  }
}
