import "../styles/parallaxStyle.scss";
import ParallaxLine from "./ParallaxLine";
import { useContext } from "react";
import { AppContext, AppProvider } from "../AppContext";

export const TextBox = () => {
  return (
    <div className="textBox">
      <div className="rowParallaxLine">
        <AppProvider speed={10} start={0} end={700}>
          <ParallaxLine />
        </AppProvider>
      </div>

      <AppProvider speed={10} start={600} end={1350}>
        <ParallaxLine />
      </AppProvider>
    </div>
  );
};
