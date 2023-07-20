import React from "react";
import { Component } from "./Component";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div-2">
        <div className="overlap-2">
          <img className="frame" alt="Frame" src="frame-3.png" />
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <img className="rectangle" alt="Rectangle" src="rectangle-46.png" />
              <img className="polygon" alt="Polygon" src="polygon-5.svg" />
            </div>
          </div>
          <p className="p">
            <span className="text-wrapper">오늘 하루, </span>
            <span className="span">실패</span>
            <span className="text-wrapper">
              라고
              <br />
              느낄만한 일들이 있었나요?
            </span>
          </p>
        </div>
        <div className="text-wrapper-2">&lt;</div>
        <div className="overlap-4">
          <div className="text-wrapper-3">마이페이지</div>
          <img className="icon-hamburger" alt="Icon hamburger" src="icon-hamburger-button.png" />
        </div>
        <div className="group">
          <div className="tower">4G</div>
          <div className="network">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
          <div className="battery-normal">
            <div className="rectangle-wrapper">
              <div className="rectangle-6" />
            </div>
            <div className="rectangle-7" />
          </div>
          <div className="time">08:34</div>
        </div>
        <div className="text-wrapper-4">실패 기록하러 가기 &gt;</div>
        <Component
          className="component-1"
          divClassName="component-3"
          divClassNameOverride="component-4"
          ellipseClassName="design-component-instance-node"
          ellipseClassNameOverride="component-2"
          overlapClassName="component-1-instance"
          overlapGroupClassName="component-instance"
          vector="vector-1-2.svg"
          vectorClassName="component-5"
        />
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
    ".screen .div-2": {
      backgroundColor: "#ffffff",
      border: "1px none",
      height: "844px",
      overflow: "hidden",
      position: "relative",
      width: "390px"
    },
    ".screen .overlap-2": {
      height: "268px",
      left: "34px",
      position: "absolute",
      top: "178px",
      width: "345px"
    },
    ".screen .frame": {
      height: "145px",
      left: "0",
      position: "absolute",
      top: "0",
      width: "325px"
    },
    ".screen .overlap-wrapper": {
      height: "123px",
      left: "16px",
      opacity: 0.3,
      position: "absolute",
      top: "128px",
      width: "258px"
    },
    ".screen .overlap-3": {
      height: "145px",
      left: "-4px",
      position: "relative",
      top: "62px",
      width: "306px"
    },
    ".screen .rectangle": {
      height: "114px",
      left: "0",
      position: "absolute",
      top: "0",
      width: "306px"
    },
    ".screen .polygon": {
      height: "39px",
      left: "237px",
      position: "absolute",
      top: "106px",
      width: "49px"
    },
    ".screen .p": {
      color: "#000000",
      fontFamily: '"Inter-Medium", Helvetica',
      fontSize: "18px",
      fontWeight: 400,
      height: "50px",
      left: "34px",
      letterSpacing: "0",
      lineHeight: "25px",
      mixBlendMode: "multiply",
      position: "absolute",
      top: "218px",
      width: "311px"
    },
    ".screen .text-wrapper": { fontWeight: 500 },
    ".screen .span": {
      fontFamily: '"Inter-SemiBold", Helvetica',
      fontWeight: 600
    },
    ".screen .text-wrapper-2": {
      color: "#000000",
      fontFamily: '"Inter-Regular", Helvetica',
      fontSize: "40px",
      fontWeight: 400,
      left: "27px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "60px",
      whiteSpace: "nowrap"
    },
    ".screen .overlap-4": {
      height: "44px",
      left: "280px",
      position: "absolute",
      top: "64px",
      width: "113px"
    },
    ".screen .text-wrapper-3": {
      color: "#ffffff",
      fontFamily: '"Inter-SemiBold", Helvetica',
      fontSize: "15px",
      fontWeight: 600,
      left: "0",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "16px",
      width: "113px"
    },
    ".screen .icon-hamburger": {
      height: "42px",
      left: "52px",
      position: "absolute",
      top: "0",
      width: "45px"
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
    ".screen .rectangle-2": {
      backgroundColor: "#000000",
      height: "4px",
      left: "0",
      position: "absolute",
      top: "6px",
      width: "3px"
    },
    ".screen .rectangle-3": {
      backgroundColor: "#000000",
      height: "6px",
      left: "5px",
      position: "absolute",
      top: "4px",
      width: "3px"
    },
    ".screen .rectangle-4": {
      backgroundColor: "#000000",
      height: "8px",
      left: "10px",
      position: "absolute",
      top: "2px",
      width: "3px"
    },
    ".screen .rectangle-5": {
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
    ".screen .rectangle-6": {
      backgroundColor: "#fdd015",
      borderRadius: "0.87px",
      height: "7px",
      left: "1px",
      position: "relative",
      top: "1px",
      width: "11px"
    },
    ".screen .rectangle-7": {
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
    ".screen .text-wrapper-4": {
      color: "#000000",
      fontFamily: '"Inter-SemiBold", Helvetica',
      fontSize: "15px",
      fontWeight: 600,
      left: "139px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "758px",
      width: "253px"
    },
    ".screen .component-1": {
      height: "164px !important",
      left: "119px !important",
      position: "absolute !important",
      top: "512px !important",
      width: "225px !important"
    },
    ".screen .component-instance": {
      backgroundImage: "url(./image.svg) !important",
      height: "172px !important",
      width: "233px !important"
    },
    ".screen .component-1-instance": {
      height: "42px !important",
      left: "116px !important",
      top: "35px !important",
      width: "64px !important"
    },
    ".screen .design-component-instance-node": {
      backgroundColor: "#ffffff !important",
      borderRadius: "18.13px/20.92px !important",
      height: "42px !important",
      width: "36px !important"
    },
    ".screen .component-2": {
      backgroundColor: "#ffffff !important",
      borderRadius: "18.13px/20.92px !important",
      height: "42px !important",
      left: "28px !important",
      width: "36px !important"
    },
    ".screen .component-3": {
      borderRadius: "8.06px/9.83px !important",
      height: "20px !important",
      left: "40px !important",
      top: "22px !important",
      width: "16px !important"
    },
    ".screen .component-4": {
      borderRadius: "8.06px/9.83px !important",
      height: "20px !important",
      left: "11px !important",
      top: "22px !important",
      width: "16px !important"
    },
    ".screen .component-5": {
      height: "24px !important",
      left: "117px !important",
      top: "98px !important",
      width: "54px !important"
    }
  }
  