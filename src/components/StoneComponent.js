import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({
  className,
  overlapGroupClassName,
  overlapClassName,
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  divClassNameOverride,
  vectorClassName,
  vector = "/img/vector-1-1.svg",
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`overlap ${overlapClassName}`}>
          <div className={`ellipse ${ellipseClassName}`} />
          <div className={`div ${ellipseClassNameOverride}`} />
          <div className={`ellipse-2 ${divClassName}`} />
          <div className={`ellipse-3 ${divClassNameOverride}`} />
        </div>
        <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
      </div>
    </div>
  );
};

Component.propTypes = {
  vector: PropTypes.string,
};

import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
};

export const Default = {
  args: {
    className: {},
    overlapGroupClassName: {},
    overlapClassName: {},
    ellipseClassName: {},
    ellipseClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
    vectorClassName: {},
    vector: "/img/vector-1-1.svg",
  },
};
const converted = {
    ".component": { height: "259px", width: "335px" },
    ".component .overlap-group": {
      backgroundImage: "url(../../../static/img/ellipse-23.svg)",
      backgroundSize: "100% 100%",
      height: "267px",
      left: "-4px",
      position: "relative",
      width: "343px"
    },
    ".component .overlap": {
      height: "66px",
      left: "171px",
      position: "absolute",
      top: "55px",
      width: "95px"
    },
    ".component .ellipse": {
      backgroundColor: "#d9d9d9",
      borderRadius: "27px/33px",
      height: "66px",
      left: "0",
      position: "absolute",
      top: "0",
      width: "54px"
    },
    ".component .div": {
      backgroundColor: "#d9d9d9",
      borderRadius: "27px/33px",
      height: "66px",
      left: "41px",
      position: "absolute",
      top: "0",
      width: "54px"
    },
    ".component .ellipse-2": {
      backgroundColor: "#000000",
      borderRadius: "12px/15.5px",
      height: "31px",
      left: "59px",
      position: "absolute",
      top: "35px",
      width: "24px"
    },
    ".component .ellipse-3": {
      backgroundColor: "#000000",
      borderRadius: "12px/15.5px",
      height: "31px",
      left: "17px",
      position: "absolute",
      top: "35px",
      width: "24px"
    },
    ".component .vector": {
      height: "37px",
      left: "173px",
      position: "absolute",
      top: "156px",
      width: "79px"
    }
  }
  