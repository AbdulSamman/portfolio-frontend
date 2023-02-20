import { TextBox } from "../components/TextBox";
import "../styles/pages/pageProjects.scss";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

export const PageProjects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div id="projects" className="pageProjects">
      <h1>PROJECTS</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="project" key={project.id}>
              <div className="imageContainer">
                <img src={project.image} />
              </div>
              <div className="container">
                <h3>{project.name}</h3>

                <div className="tags">
                  {project.tags.map((tag, i) => {
                    return (
                      <div key={i} className="tag">
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <div className="icons">
                  <AiFillGithub />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
