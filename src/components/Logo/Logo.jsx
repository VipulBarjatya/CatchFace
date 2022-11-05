import React from "react";
import logoImage from "./catchFace-logo.png";
import Tilt from "react-parallax-tilt";
import "./logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 logo">
      <Tilt
        style={{
          display: "flex",
          height: "64px",
          width: "310px",
          margin: "10px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              boxShadow: "0px 0px 15px rgba(255,255,255,0.75) inset",
              borderRadius: "5px",
              background: "rgba(255,255,255,0.075)",
              backdropFilter: "blur(3px)",
            }}
          >
            <img src={logoImage} alt="logo" />
            <p className="logotxt">CatchFace</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
