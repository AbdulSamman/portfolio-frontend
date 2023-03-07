import "../styles/pages/pageProjects.scss";
import { useContext } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import React from "react";
import ParallaxLine from "../components/ParallaxLine";
export const PageProjects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div id="projects" className="pageProjects">
      <div style={{ paddingBottom: "1rem" }}>
        <AppProvider speed={10} start={0} end={1000}>
          <ParallaxLine />
        </AppProvider>
      </div>
      <div className="moveProject">
        <div
          className="projects"
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(
              projects.length / 2
            )}, 1fr)`,
          }}
        >
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
                        <a href={project.repo} target="_blank">
                          <AiFillGithub className="icon ic1" />
                        </a>
                        {project.url === "" ? (
                          <AiOutlineGlobal
                            className={
                              project.url === "" ? "icon notUrl" : "icon ic2"
                            }
                          />
                        ) : (
                          <a href={project.url} target="_blank">
                            <AiOutlineGlobal
                              className={
                                project.url === "" ? "icon notUrl" : "icon ic2"
                              }
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <AppProvider speed={10} start={900} end={1900}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
