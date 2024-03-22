import Swal from "sweetalert2";
import "../styles/pages/popUp.scss";
import { IProject } from "../interfaces";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import ReactDOM from "react-dom";

export const popUp = (project: IProject) => {
  const popupContainer = document.createElement("div");

  ReactDOM.render(
    <div className="popupContainer">
      <h4>{project.name}</h4>
      <div className="popUpImage">
        <img src={project.image} />
      </div>

      <div className="tags">
        {project.tags.map((tag, i) => {
          return (
            <div key={i + 1} className={`tag ${tag}`}>
              {tag}
            </div>
          );
        })}
      </div>

      <div className="row">
        <p className="description">${project.description}</p>
        <div className="icons">
          <a href={project.repo} target="_blank">
            <AiFillGithub className="icon ic1" />
          </a>
          {project.url === "" ? (
            <AiOutlineGlobal
              className={project.url === "" ? "icon notUrl" : "icon ic2"}
            />
          ) : (
            <a href={project.url} target="_blank">
              <AiOutlineGlobal
                className={project.url === "" ? "icon notUrl" : "icon ic2"}
              />
            </a>
          )}
        </div>
      </div>
    </div>,
    popupContainer
  );
  Swal.fire({
    html: popupContainer,
    background: "rgba(0,0,50,0.9)",
    confirmButtonText: "close",
    padding: "0",
    customClass: {
      title: "popupTitle",
      popup: "myPopup",
      confirmButton: "closeButton",
    },
  });
};
