import "../styles/pages/pageSkills.scss";
import { AppProvider } from "../AppContext";
import ParallaxLine from "../components/ParallaxLine";
import { ISkill } from "../interfaces";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageSkills = () => {
  const { skills } = useContext(AppContext);

  return (
    <div id="skills" className="pageSkills">
      <h1>SKILLS</h1>
      <div className="skills">
        {skills.map((skill: ISkill) => {
          return (
            <div key={skill.id} className={`skill ${skill.title}`}>
              <div className="title">{skill.title}</div>
              <div className="skillImg">
                {skill.skills &&
                  skill.skills.map((skillImg, index) => (
                    <img
                      key={index}
                      src={`images/icons/${skillImg}.png`}
                      alt={skillImg}
                      className={skillImg}
                    />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div>
        <AppProvider speed={10} start={1000} end={2500}>
          <ParallaxLine />
        </AppProvider>
      </div> */}
    </div>
  );
};
