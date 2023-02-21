import { Parallax } from "react-parallax";
// for more parallax another image
import Background from "/images/Green.jpg";
import shadowImage from "/images/shadowForest.png";
import rightImage from "/images/palmen.png";
import mongodbImage from "/images/mongodb.png";
import htmlImage from "/images/html.png";
import jsImage from "/images/javascript.png";
import tsImage from "/images/typescript.png";
import nodejsImage from "/images/nodejs.png";
import reactImage from "/images/react.png";
import "../styles/parallaxStyle.scss";
import "../styles/cubeSpinner.scss";

export const ParallaxBackground: React.FC = () => {
  return (
    <Parallax bgImage={Background} strength={300}>
      <div className="content">
        <div className="personalContainer">
          <h1 className="personal">SAMMAN</h1>
          <div className="cubeSpinner">
            <div className="face1">
              <img src={mongodbImage} />
            </div>
            <div className="face2">
              <img src={reactImage} />
            </div>
            <div className="face3">
              <img src={nodejsImage} />
            </div>
            <div className="face4">
              <img src={tsImage} />
            </div>
            <div className="face5">
              <img src={jsImage} />
            </div>
            <div className="face6">
              <img src={htmlImage} />
            </div>
          </div>
        </div>
        <div className="layer" data-depth="0.4">
          <img src={shadowImage} alt="shadow" className="shadowBlackImg" />
        </div>
        <div className="layer" data-depth="0.6">
          <img src={rightImage} alt="right" className="rightImg" />
        </div>
      </div>
    </Parallax>
  );
};
