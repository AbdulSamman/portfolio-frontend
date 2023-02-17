import "../styles/App.scss";
import { BsTriangleHalf } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const ParallaxLine = () => {
  const { scaleX, rotateY } = useContext(AppContext);

  return (
    <div className="parallaxRowLine">
      <div
        className="parallaxLine"
        style={{ transform: `scaleX(${scaleX})` }}
      />
      <div className="parallaxSpace">
        <BsTriangleHalf
          className="BsTriangleHalfIcon"
          style={{ transform: `scaleY(${rotateY}) ` }}
        />
      </div>
    </div>
  );
};

export default ParallaxLine;
