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
      <div style={{ paddingBottom: "1rem" }}>
        <AppProvider speed={10} start={-100} end={1000}>
          <ParallaxLine />
        </AppProvider>
      </div>

      <div className="projects">
        {projects.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <div className="project" onClick={() => popUp(project)}>
                <h4>{project.name}</h4>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div style={{ paddingTop: "2rem" }}>
        <AppProvider speed={10} start={600} end={2200}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
