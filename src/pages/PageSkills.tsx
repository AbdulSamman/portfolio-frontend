import "../styles/pages/pageSkills.scss";
import { useContext } from "react";
import { AppContext, AppProvider } from "../AppContext";
import ReactSkillbar from "react-skillbars";
import CountUp from "react-countup";
import ParallaxLine from "../components/ParallaxLine";

export const PageSkills = () => {
  const { skills } = useContext(AppContext);

  const skillBars = skills.map((skill) => ({
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
      {/* <div className="skill">
        {skills.map((skill, i) => {
          return (
            <div className="countUp" key={i}>
              <h1 className="skillPercent">
                <CountUp start={0} end={skill.value} duration={3} delay={0} />
              </h1>
            </div>
          );
        })}
      </div> */}
      <div style={{ paddingBottom: "2rem" }}>
        <AppProvider speed={10} start={1800} end={2900}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
