import { TextBox } from "../components/TextBox";
import "../styles/pages/pageProjects.scss";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import React from "react";

export const PageProjects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div id="projects" className="pageProjects">
      <h1>PROJECTS</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <div className="project">
                <div className="flipCardInner">
                  <div className="flipCardInner-front">
                    <div className="imgContainer">
                      <img src={project.image} />
                    </div>
                    <div className="container">
                      <h4>{project.name}</h4>

                      <div className="tags">
                        {project.tags.map((tag, i) => {
                          return (
                            <div key={i + 1} className={`tag ${tag}`}>
                              {tag}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flipCardInner-back">
                    <p>{project.description}</p>
                    <div className="icons">
                      <AiFillGithub />
                      <AiOutlineGlobal />
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
