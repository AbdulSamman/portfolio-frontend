import "../styles/pages/pageSkills.scss";
import { AppProvider } from "../AppContext";
import ReactSkillbar from "react-skillbars";
import ParallaxLine from "../components/ParallaxLine";
import skills from "../data/skills.json";
import { ISkills } from "../interfaces";

export const PageSkills = () => {
  const skillBars = skills.map((skill: ISkills) => ({
    type: skill.type,
    level: skill.value,
  }));

  return (
    <div id="skills" className="pageSkills">
      <div className="container">
        <ReactSkillbar
          skills={skillBars}
          height={40}
          animationDuration={1800}
        />
      </div>

      <div>
        <AppProvider speed={10} start={1300} end={2500}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
