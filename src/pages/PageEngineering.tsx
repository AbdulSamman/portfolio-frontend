import "../styles/pages/pageProjects.scss";
import { AppProvider } from "../AppContext";
import React, { useState } from "react";
import ParallaxLine from "../components/ParallaxLine";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { popUpEngineering } from "../components/Popupengineering";

const FEATURED_COUNT = 7;

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

      <div className="line">
        <AppProvider speed={10} start={0} end={0}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
