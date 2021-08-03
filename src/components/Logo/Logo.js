import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ml4 tc">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 120, width: 120 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="Tilt-inner h-100"
        >
          <img
            className="v-mid"
            style={{ paddingTop: "5px" }}
            src={brain}
            alt="logo"
          ></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
