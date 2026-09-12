import Swal from "sweetalert2";
import "../styles/pages/popUp.scss";
import { IProject } from "../interfaces";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { createRoot } from "react-dom/client";
import { ProjectGallery } from "./ProjectGallery";

export const popUp = (project: IProject) => {
  const popupContainer = document.createElement("div");

  createRoot(popupContainer).render(
    <div className="popupContainer">
      <h3>{project.name}</h3>

      <ProjectGallery
        images={
          project.image
            ? [
                `https://res.cloudinary.com/duphnvqtf/image/upload/portfolio/${project.image}`,
              ]
            : []
        }
      />
      <div className="tags">
        {project.tags?.map((tag, i) => {
          return (
            <div key={i + 1} className={`tag ${tag}`}>
              {tag}
            </div>
          );
        })}
      </div>

      <div className="row">
        <p className="description">{project.description}</p>
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
  );
  Swal.fire({
    title: popupContainer,
    showClass: {
      popup: "swalFadeIn",
    },
    hideClass: {
      popup: "swalFadeOut",
    },
    confirmButtonText: "Schließen",
    buttonsStyling: false,
    customClass: {
      popup: "myPopup",
      confirmButton: "confirmButtonText",
    },
  });
};
