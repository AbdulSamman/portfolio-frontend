import { ParallaxBackground } from "./components/ParallaxBackground";
import { Link } from "react-scroll";
import { PageProjects } from "./pages/PageProjects";
import { PageSkills } from "./pages/PageSkills";
import { PageContact } from "./pages/PageContact";
import "./styles/App.scss";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isOpacity } = useContext(AppContext);
  return (
    <div className="App" id="start">
      <ParallaxBackground />
      <div className={`navList sticky`}>
        <div className="logo">
          <h2 style={{ opacity: `${isOpacity}` }}>
            <Link
              to="start"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              SAMMAN
            </Link>
          </h2>
        </div>
        <nav>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SKILLS
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT
          </Link>
        </nav>
      </div>
      <PageProjects />
      <PageSkills />
      <PageContact />
    </div>
  );
}

export default App;
