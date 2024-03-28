import { Parallax } from "react-parallax";
// for more parallax another image edited
import Background from "/images/Green.jpg";
import shadowImage from "/images/shadowForest.png";
import rightImage from "/images/palmen.png";
import tiger from "/images/tiger.png";
import { FaConnectdevelop } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import "../styles/parallaxStyle.scss";
import React from "react";

export const ParallaxBackground: React.FC = () => {
  const { spinnSpeed, person, moveTigerX } = useContext(AppContext);

  return (
    <Parallax bgImage={Background} strength={300}>
      <div className="content">
        <div className="personalContainer">
          <h1 className="personal">
            <span className="lastName"> {person.lastName}</span>
          </h1>
          <h2 className="animatedText">
            {person.title} <span>...</span>
          </h2>
          <div className="logoIcon">
            <FaConnectdevelop
              className="spinnerLogoIcon"
              style={{
                animation: `spinner ${spinnSpeed}s linear infinite`,
              }}
            />
          </div>
        </div>
        <div className="layer" data-depth="0.4">
          <img src={shadowImage} alt="shadow" className="shadowBlackImg" />
        </div>
        <div className="layer" data-depth="0.6">
          <img src={rightImage} alt="right" className="rightImg" />
        </div>
        <div className="layer">
          <img
            src={tiger}
            alt="tiger"
            className="tiger"
            style={{ right: `${moveTigerX}%` }}
          />
        </div>
      </div>
    </Parallax>
  );
};
