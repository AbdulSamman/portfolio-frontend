import { ParallaxBackground } from "./components/ParallaxBackground";
import { Link } from "react-scroll";
import { PageProjects } from "./pages/PageProjects";
import { PageSkills } from "./pages/PageSkills";
import { PageContact } from "./pages/PageContact";
import "./styles/App.scss";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { isFixed } = useContext(AppContext);
  return (
    <div className="App" id="start">
      <ParallaxBackground />
      <div className={`navList ${isFixed ? "fixed" : "notFixed"}`}>
        <nav>
          <Link to="start" spy={true} smooth={true} offset={0} duration={500}>
            HOME
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
            SKILLS
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
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
