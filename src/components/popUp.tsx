import Swal from "sweetalert2";
import "../styles/pages/popUp.scss";
import { IProject } from "../interfaces";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import ReactDOMServer from "react-dom/server";

export const popUp = (project: IProject) => {
  // jsx to html
  const githubIcon = ReactDOMServer.renderToString(<AiFillGithub />);
  const globalIcon = ReactDOMServer.renderToString(<AiOutlineGlobal />);
  Swal.fire({
    html: `
 <div class="popupContainer">

        <div class="popUpImage">
            <img src=${project.image} />
        </div>


        <div class="tags">
                    ${project.tags.map((tag, i) => {
                      return (
                        <div key={i + 1} className={`tag ${tag}`}>
                          {tag}
                        </div>
                      );
                    })}
         </div>

        <div class="row">
                <p class="description">${project.description}</p>
                <div class="icons">
                  <a href=${project.repo} target="_blank">
                   ${githubIcon}
                  </a>

                  ${
                    project.url === "" ? (
                      <span
                        className={
                          project.url === "" ? "icon notUrl" : "icon ic2"
                        }>
                        {globalIcon}
                      </span>
                    ) : (
                      <a href={project.url} target="_blank">
                        <span className="icon ic2">{globalIcon}</span>
                      </a>
                    )
                  }
                   </div>

            </div>
    </div>


      `,

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
