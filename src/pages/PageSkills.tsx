import "../styles/pages/pageSkills.scss";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import ReactSkillbar, { SkillBarProps } from "react-skillbars";

interface MySkillBarProps extends SkillBarProps {
  delay: number;
}

export const PageSkills = () => {
  const { skills } = useContext(AppContext);

  const skillBars = skills.map((skill, time) => ({
    type: skill.type,
    level: skill.value,
    delay: (time + 1) * 1000,
  }));

  return (
    <div id="skills" className="pageSkills">
      <ReactSkillbar<MySkillBarProps>
        skills={skillBars}
        height={40}
        animationDuration={3000}
        delay={4000}
      />
    </div>
  );
};
