import "../styles/pages/pageProjects.scss";
import { AppProvider } from "../AppContext";
import React from "react";
import ParallaxLine from "../components/ParallaxLine";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { popUp } from "../components/popUp";

export const PageProjects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div id="projects" className="pageProjects">
      <div className="line">
        <AppProvider speed={10} start={-200} end={1000}>
          <ParallaxLine />
        </AppProvider>
      </div>
      <h1>PROJECTS</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <React.Fragment key={project._id}>
              <div className="project" onClick={() => popUp(project)}>
                <h4>{project.name}</h4>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="line">
        <AppProvider speed={10} start={700} end={1900}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
