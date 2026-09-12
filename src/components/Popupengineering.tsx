import Swal from "sweetalert2";
import "../styles/pages/popUp.scss";
import { IEngineeringProject } from "../interfaces";
import { AiOutlineGlobal } from "react-icons/ai";
import { createRoot } from "react-dom/client";
import { ProjectGallery } from "./ProjectGallery";

export const popUpEngineering = (project: IEngineeringProject) => {
  const popupContainer = document.createElement("div");

  createRoot(popupContainer).render(
    <div className="popupContainer">
      <h3>{project.name}</h3>
      {/* <div className="popUpImage">
        {project.images?.map((img: string, i: any) => (
          <img key={i} src={img} />
        ))}
      </div> */}
      <ProjectGallery images={project.images ?? []} />
      <div className="tags">
        {project.tools?.map((tool, i) => {
          return (
            <div key={i + 1} className={`tag ${tool}`}>
              {tool}
            </div>
          );
        })}
      </div>

      <div className="row">
        <p className="description">{project.description}</p>
        {project.link ? (
          <div className="icons">
            <a href={project.link} target="_blank">
              <AiOutlineGlobal className="icon ic2" />
            </a>
          </div>
        ) : null}
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
