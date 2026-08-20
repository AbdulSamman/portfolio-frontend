import "../styles/pages/pageProjects.scss";
import { AppProvider } from "../AppContext";
import React from "react";
import ParallaxLine from "../components/ParallaxLine";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { popUpEngineering } from "../components/Popupengineering";
import { HiOutlineExternalLink } from "react-icons/hi";

export const PageEngineering = () => {
  const { engineeringProjects } = useContext(AppContext);
  return (
    <div id="engineering" className="pageProjects">
      <h1>ENGINEERING</h1>
      <div className="projects">
        {engineeringProjects.map((project) => {
          return (
            <React.Fragment key={project._id}>
              <div
                className="project"
                onClick={() => popUpEngineering(project)}
              >
                {project.link ? (
                  <HiOutlineExternalLink className="linkIndicator" />
                ) : null}
                <h4>{project.name}</h4>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="line">
        <AppProvider speed={10} start={1900} end={3100}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
