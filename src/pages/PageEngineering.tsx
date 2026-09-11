import "../styles/pages/pageProjects.scss";
import { AppProvider } from "../AppContext";
import React, { useState } from "react";
import ParallaxLine from "../components/ParallaxLine";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { popUpEngineering } from "../components/Popupengineering";

const FEATURED_COUNT = 7;

// PDF
const pdfFiles = [
  {
    category: "Unterlagen",
    title: "Bewerbung",
    fileUrl: "/docs/Unterlagen.pdf",
  },
  {
    category: "Nachweise",
    title: "Zertifikate",
    fileUrl: "/docs/Zertifikate.pdf",
  },
  {
    category: "Wirbelstromscheider",
    title: "Entsorga",
    fileUrl:
      "https://res.cloudinary.com/duphnvqtf/image/upload/v1789060603/portfolio/Entsorga_Artikel_L.S.L._Mechatronics_1_ed7mey.pdf",
  },
];

const videoFiles = [
  {
    category: "Wirbelstromscheider",
    title: "RMS-Förderung",
    videoUrl:
      "https://res.cloudinary.com/duphnvqtf/video/upload/v1789054314/portfolio/RMS_Foerderung_qhyh2g.mp4",
    poster: "",
  },
  {
    category: "Wirbelstromscheider",
    title: "Blei Versuch",
    videoUrl:
      "https://res.cloudinary.com/duphnvqtf/video/upload/v1789057289/portfolio/Blei_RMS_com_kftukx.mp4",
    poster: "",
  },
];

export const PageEngineering = () => {
  const { engineeringProjects } = useContext(AppContext);
  const [showAll, setShowAll] = useState(false);

  const hasMore = engineeringProjects.length > FEATURED_COUNT;
  const visibleProjects = showAll
    ? engineeringProjects
    : engineeringProjects.slice(0, FEATURED_COUNT);

  return (
    <div id="engineering" className="pageProjects">
      <h1>ENGINEERING</h1>
      <div className="projects">
        {visibleProjects.map((project) => {
          return (
            <React.Fragment key={project._id}>
              <div
                className="project"
                onClick={() => popUpEngineering(project)}
              >
                <h4>{project.name}</h4>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {hasMore && (
        <button
          type="button"
          className="viewAllBtn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Hide All" : `View All (${engineeringProjects.length})`}
        </button>
      )}
      <div className="pdfRowContainer">
        {pdfFiles.map((pdf, index) => (
          <a
            key={index}
            href={pdf.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pdfItem"
          >
            <span className="pdfCategory">{pdf.category}</span>
            <div className="pdfBadge">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF Icon"
                className="pdfImgIcon"
              />
            </div>
            <span className="pdfTitle">{pdf.title}</span>
          </a>
        ))}
      </div>
      <div className="videoRowContainer">
        {videoFiles.map((video, index) => (
          <a
            key={index}
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="videoItem"
          >
            <span className="videoCategory">{video.category}</span>
            <div className="videoBadge">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1179/1179069.png"
                alt="Video Icon"
                className="videoImgIcon"
              />
            </div>
            <span className="videoTitle">{video.title}</span>
          </a>
        ))}
      </div>
      <div className="line">
        <AppProvider speed={10} start={0} end={0}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
