import { useState, useEffect } from "react";
import { createContext } from "react";
import {
  HandleScroll,
  IAppContext,
  IAppProvider,
  IPerson,
  IProject,
  ISkill,
  personDataEmpty,
} from "./interfaces";

import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Objekt entleeren

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
  const [spinnSpeed, setSpinnSpeed] = useState(3);
  const [spinnSpeedLogo, setSpinnSpeedLogo] = useState(3);
  const [isOpacity, setIsOpacity] = useState(0);

  // Data
  const [person, setPerson] = useState<IPerson>(personDataEmpty);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);
  //projects
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const responseProjects = (await axios.get(`${backendUrl}/projects`))
          .data;
        setProjects(responseProjects);
      })();
    }, 2000);
  }, []);
  //Skills
  useEffect(() => {
    (async () => {
      const responseSkills = (await axios.get(`${backendUrl}/skills`)).data;
      setSkills(responseSkills);
    })();
  }, []);

  //person
  useEffect(() => {
    (async () => {
      const personData = (await axios.get(`${backendUrl}/person`)).data;
      setPerson(personData);
    })();
  }, []);

  const handleScroll: HandleScroll = (_, scrollY) => {
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

    switch (true) {
      case scrollY >= 950:
        setIsOpacity(1);
        setSpinnSpeedLogo(1);
        break;
      case scrollY >= 850:
        setIsOpacity(0.8);

        break;
      case scrollY >= 750:
        setIsOpacity(0.6);
        setSpinnSpeedLogo(1.5);
        break;
      case scrollY >= 650:
        setIsOpacity(0.4);

        break;
      case scrollY >= 550:
        setIsOpacity(0.2);
        setSpinnSpeedLogo(2);
        break;
      case scrollY >= 150:
        setSpinnSpeed(0.5);
        break;
      case scrollY >= 100:
        setSpinnSpeed(1);
        break;
      case scrollY >= 50:
        setSpinnSpeed(1.5);
        break;
      default:
        setIsOpacity(0);

        break;
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
        isOpacity,
        spinnSpeed,
        spinnSpeedLogo,
        projects,
        skills,
        person,
      }}>
      {children}
    </AppContext.Provider>
  );
};
