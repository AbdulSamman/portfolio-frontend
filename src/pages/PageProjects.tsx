import "../styles/pages/pageProjects.scss";
import { AppProvider } from "../AppContext";
import React, { useState } from "react";
import ParallaxLine from "../components/ParallaxLine";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { popUp } from "../components/popUp";

const FEATURED_COUNT = 7;

export const PageProjects = () => {
  const { projects } = useContext(AppContext);
  const [showAll, setShowAll] = useState(false);

  const hasMore = projects.length > FEATURED_COUNT;
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, FEATURED_COUNT);

  return (
    <div id="projects" className="pageProjects">
      <div className="line">
        <AppProvider speed={10} start={-200} end={1000}>
          <ParallaxLine />
        </AppProvider>
      </div>
      <h1>PROJECTS</h1>
      <div className="projects">
        {visibleProjects.map((project) => {
          return (
            <React.Fragment key={project._id}>
              <div className="project" onClick={() => popUp(project)}>
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
          {showAll ? "Hide All" : `View All (${projects.length})`}
        </button>
      )}

      <div className="line">
        <AppProvider speed={10} start={700} end={1900}>
          <ParallaxLine />
        </AppProvider>
      </div>
    </div>
  );
};
