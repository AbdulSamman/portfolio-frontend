import "../styles/parallaxStyle.scss";
import ParallaxLine from "./ParallaxLine";
import { useContext } from "react";
import { AppContext, AppProviderParallax } from "../AppContextParallax";

export const TextBox = () => {
  return (
    <div className="textBox">
      <h3>First Class Ticket</h3>
      <div className="rowParallaxLine">
        <AppProviderParallax speed={10} start={0} end={700}>
          <ParallaxLine />
        </AppProviderParallax>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est,
        at ea quod dolorum omnis doloribus sed magnam. Laborum sequi, pariatur
        voluptates velit doloribus doloremque laborum eius cum aliquid, quis
        alias exercitationem voluptatibus in numquam eveniet, facere inventore?
        Labore nulla excepturi iusto recusandae consectetur saepe ipsum sint
        quis repellat architecto? Numquam, quibusdam? Voluptatibus earum ex esse
        sequi veniam provident beatae asperiores eum obcaecati nesciunt, sit
        laborum, eos quaerat inventore ullam officiis, rem maxime architecto?
        Odit possimus molestias ad magni quia? Dignissimos laboriosam veniam
        perspiciatis atque reprehenderit reiciendis dolorem pariatur ipsa,
        excepturi eveniet quidem et facilis quae quos tempore repellendus autem
        inventore. Necessitatibus autem tenetur praesentium obcaecati
        accusantium suscipit sequi minus?
      </p>
      <AppProviderParallax speed={10} start={600} end={1350}>
        <ParallaxLine />
      </AppProviderParallax>
    </div>
  );
};
