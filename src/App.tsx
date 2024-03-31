import { ParallaxBackground } from "./components/ParallaxBackground";
import { PageProjects } from "./pages/PageProjects";
import { PageSkills } from "./pages/PageSkills";
import { PageContact } from "./pages/PageContact";
import "./styles/App.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { FaConnectdevelop } from "react-icons/fa";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { projects, isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  return (
    <div
      className="App"
      id="start"
      onClick={() => isMenuOpen && setIsMenuOpen(false)}>
      {projects.length === 0 ? (
        <div className="loadingPage">
          <FaConnectdevelop className="spinnerLogoIcon" />

          <span>ABDULRAZAK</span>
        </div>
      ) : (
        <>
          <ParallaxBackground />
          <PageProjects />
          <PageSkills />
          <PageContact />
        </>
      )}
    </div>
  );
}

export default App;
