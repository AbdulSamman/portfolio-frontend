// import { useState, useEffect } from "react";
// import "../styles/App.scss";
// import { BsTriangleHalf } from "react-icons/bs";

// interface ParallaxLineProps {
//   speed: number;
// }

// interface HandleScroll {
//   (event: Event, scrollY: number): void;
//   prevScrollPosition?: number;
// }

// const ParallaxLine: React.FC<ParallaxLineProps> = ({ speed }) => {
//   // Define a state variable for the horizontal scaling of the parallax line.
//   const [scaleX, setScaleX] = useState(0.2);
//   const [rotateY, setRotateY] = useState(0.2);
//   const handleScroll: HandleScroll = (event, scrollY) => {
//     // Get the current scroll position.
//     const scrollPosition = scrollY;
//     if (scrollPosition >= scrollY) {
//       // hide the parallax line at the end of the page
//       setScaleX(2);
//     } else {
//       // Calculate the angle of the parallax line based on the scroll position and speed props.
//       const angle = scrollPosition * speed * 0.002;
//       // Calculate the sine value of the angle.
//       const sinValue = Math.sin(angle);
//       const prevScrollPosition =
//         handleScroll.prevScrollPosition || scrollPosition;
//       const direction = scrollPosition > prevScrollPosition ? "down" : "up";
//       handleScroll.prevScrollPosition = scrollPosition;

//       let scaleX = sinValue * 0.2 + 0.6;
//       if (direction === "down") {
//         scaleX = 0.01 - scrollPosition * 0.0015;
//       } else if (direction === "up") {
//         scaleX = 0.01 + scrollPosition * 0.0015;
//       }
//       setRotateY(scaleX);
//       setScaleX(scaleX);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", (event) => handleScroll(event, scrollY));
//     return () => {
//       window.removeEventListener("scroll", (event) =>
//         handleScroll(event, scrollY)
//       );
//     };
//   }, [scrollY]);

//   return (
//     <div className="parallaxRowLine">
//       <div
//         className="parallaxLine"
//         style={{ transform: `scaleX(${scaleX})` }}
//       />
//       <div className="parallaxSpace">
//         <BsTriangleHalf
//           className="BsTriangleHalfIcon"
//           style={{ transform: `scaleY(${rotateY}) ` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ParallaxLine;

// // import "../styles/App.scss";
// // import { BsTriangleHalf } from "react-icons/bs";
// // import { useContext } from "react";
// // import { AppContext } from "../AppContext";

// // const ParallaxLine: any = () => {
// //   const { scaleX } = useContext(AppContext);
// //   return (
// //     <div className="parallaxRowLine">
// //       <div
// //         className="parallaxLine"
// //         style={{ transform: `scaleX(${scaleX})` }}
// //       />
// //       <div className="parallaxSpace">
// //         <BsTriangleHalf
// //           className="BsTriangleHalfIcon"
// //           style={{ transform: `scaleY(${scaleX})` }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ParallaxLine;

import { useState, useEffect } from "react";
import "../styles/App.scss";
import { BsTriangleHalf } from "react-icons/bs";

interface ParallaxLineProps {
  speed: number;
  start: number;
  end: number;
}

interface HandleScroll {
  (event: Event, scrollY: number): void;
  prevScrollPosition?: number;
}

const ParallaxLine: React.FC<ParallaxLineProps> = ({ speed, start, end }) => {
  // Define a state variable for the horizontal scaling of the parallax line.
  const [scaleX, setScaleX] = useState(0.2);
  const [rotateY, setRotateY] = useState(0.2);

  const handleScroll: HandleScroll = (event, scrollY) => {
    if (scrollY >= start && scrollY <= end) {
      // Calculate the angle of the parallax line based on the scroll position and speed props.
      const angle = (scrollY - start) * speed * 0.002;
      // Calculate the sine value of the angle.
      const sinValue = Math.sin(angle);
      const prevScrollPosition = handleScroll.prevScrollPosition || scrollY;
      const direction = scrollY > prevScrollPosition ? "down" : "up";
      handleScroll.prevScrollPosition = scrollY;

      let scaleX = sinValue * 0.2 + 0.6;
      if (direction === "down") {
        scaleX = 0.01 - (scrollY - start) * 0.0015;
      } else if (direction === "up") {
        scaleX = 0.01 + (scrollY - start) * 0.0015;
      }
      setRotateY(scaleX);
      setScaleX(scaleX);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      handleScroll(event, window.pageYOffset)
    );
    return () => {
      window.removeEventListener("scroll", (event) =>
        handleScroll(event, window.pageYOffset)
      );
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
          style={{ transform: `scaleY(${rotateY}) ` }}
        />
      </div>
    </div>
  );
};

export default ParallaxLine;
