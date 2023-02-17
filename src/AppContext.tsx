import { createContext } from "react";
import {
  IAppContext,
  IAppProvider,
  IHandleScroll,
  IParallaxLineProps,
} from "./interfaces";
import { useEffect, useState } from "react";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const ParallaxLine: React.FC<IParallaxLineProps> = ({
  speed,
  children,
}) => {
  // Define a state variable for the horizontal scaling of the parallax line.
  const [scaleX, setScaleX] = useState(0.2);

  const handleScroll: IHandleScroll = (event) => {
    // Get the current scroll position.
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 1300) {
      // hide the parallax line at the end of the page
      setScaleX(2);
    } else {
      // Calculate the angle of the parallax line based on the scroll position and speed props.
      const angle = scrollPosition * speed * 0.002;
      // Calculate the sine value of the angle.
      const sinValue = Math.sin(angle);

      // Calculate the new scale value based on the sine value and the scroll direction
      const prevScrollPosition =
        handleScroll.prevScrollPosition || scrollPosition;
      const direction = scrollPosition > prevScrollPosition ? "down" : "up";
      handleScroll.prevScrollPosition = scrollPosition;

      let scaleX = sinValue * 0.2 + 0.6;
      if (direction === "down") {
        scaleX = Math.max(scaleX - scrollPosition * 0.0015);
      } else if (direction === "up") {
        scaleX = Math.max(0.01, scaleX + scrollPosition * 0.0015);
      }

      setScaleX(scaleX);
    }
  };

  useEffect(() => {
    // Add an event listener for the scroll event when the component mounts.
    window.addEventListener("scroll", handleScroll);
    return () => {
      // remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <AppContext.Provider value={{ scaleX }}>{children}</AppContext.Provider>
  );
};

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return <ParallaxLine speed={0.1}>{children}</ParallaxLine>;
};
