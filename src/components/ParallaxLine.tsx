import { useState, useEffect } from "react";
import "../styles/App.scss";
import { BsTriangleHalf } from "react-icons/bs";

interface ParallaxLineProps {
  speed: number;
}

interface HandleScroll {
  (event: Event): void;
  prevScrollPosition?: number;
}

const ParallaxLine: React.FC<ParallaxLineProps> = ({ speed }) => {
  // Define a state variable for the horizontal scaling of the parallax line.
  const [scaleX, setScaleX] = useState(0.2);

  const handleScroll: HandleScroll = (event) => {
    // Get the current scroll position.
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 1200) {
      // hide the parallax line at the end of the page
      setScaleX(2);
    } else {
      // Calculate the angle of the parallax line based on the scroll position and speed props.
      const angle = scrollPosition * speed * 0.002;
      // Calculate the sine value of the angle.
      const sinValue = Math.sin(angle);
      const prevScrollPosition =
        handleScroll.prevScrollPosition || scrollPosition;
      const direction = scrollPosition > prevScrollPosition ? "down" : "up";
      handleScroll.prevScrollPosition = scrollPosition;

      let scaleX = sinValue * 0.2 + 0.6;
      if (direction === "down") {
        scaleX = 0.01 - scrollPosition * 0.0015;
      } else if (direction === "up") {
        scaleX = 0.01 + scrollPosition * 0.0015;
      }

      setScaleX(scaleX);
    }
  };

  useEffect(() => {
    // Add an event listener for the scroll event when the component mounts.
    window.addEventListener("scroll", handleScroll);
    return () => {
      // remove it
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallaxRowLine">
      <div
        className="parallaxLine"
        style={{ transform: `scaleX(${scaleX})` }}
      />
      <div className="parallaxSpace">
        <BsTriangleHalf
          className="BsTriangleHalfIcon"
          style={{ transform: `scaleY(${scaleX})` }}
        />
      </div>
    </div>
  );
};

export default ParallaxLine;

// import "../styles/App.scss";
// import { BsTriangleHalf } from "react-icons/bs";
// import { useContext } from "react";
// import { AppContext } from "../AppContext";

// const ParallaxLine: any = () => {
//   const { scaleX } = useContext(AppContext);
//   return (
//     <div className="parallaxRowLine">
//       <div
//         className="parallaxLine"
//         style={{ transform: `scaleX(${scaleX})` }}
//       />
//       <div className="parallaxSpace">
//         <BsTriangleHalf
//           className="BsTriangleHalfIcon"
//           style={{ transform: `scaleY(${scaleX})` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ParallaxLine;
