// import "../styles/parallaxStyle.scss";
// import { BsTriangleHalf } from "react-icons/bs";
// import { useContext } from "react";
// import { AppContext } from "../AppContext";

// const ParallaxLine = () => {
//   const { scaleX, rotateY } = useContext(AppContext);

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

import "../styles/parallaxStyle.scss";
import { BsTriangleHalf } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

interface IParallaxLineProps {
  speed?: number;
}

const ParallaxLine: React.FC<IParallaxLineProps> = ({ speed = 10 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(0.6);
  // 1 للأعلى، -1 للأسفل (أو استخدام زوايا الدوران)
  const [direction, setDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0,
  );

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;

      const currentScrollY = window.scrollY;
      const currentDirection =
        currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const progress = Math.max(
        -1,
        Math.min(1, -centerOffset / (viewportH / 2)),
      );

      const angle = progress * speed * 0.2;
      const wiggle = Math.sin(angle) * 0.2;
      const magnitude = Math.max(
        0.05,
        Math.min(0.85, 0.55 + wiggle + progress * 0.15),
      );

      setScaleX(magnitude);
      setDirection(currentDirection);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div className="parallaxRowLine" ref={ref}>
      <div
        className="parallaxLine"
        style={{ transform: `scaleX(${scaleX})` }}
      />
      <div className="parallaxSpace">
        <BsTriangleHalf
          className="BsTriangleHalfIcon"
          style={{
            transform: direction === "down" ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease", // خياري: لجعل التغيير انسيابي
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxLine;
