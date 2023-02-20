import { useState, useEffect } from "react";
import { createContext } from "react";
import {
  HandleScroll,
  IAppContext,
  IAppProvider,
  IPerson,
  IProject,
  ISkills,
} from "./interfaces";

import personData from "./data/person.json";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({
  children,
  speed,
  start,
  end,
}) => {
  // Define a state variable for the horizontal scaling of the parallax line.
  const [scaleX, setScaleX] = useState(0.2);
  const [rotateY, setRotateY] = useState(0.2);
  const [isFixed, setIsFixed] = useState(false);

  // Data
  const [person, setPerson] = useState<IPerson>(personData);
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [skills, setSkills] = useState<ISkills[]>(skillsData);

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
    if (scrollY > 850) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
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
  }, [speed, start, end]);
  return (
    <AppContext.Provider
      value={{
        scaleX,
        rotateY,
        isFixed,
        person,
        projects,
        skills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
