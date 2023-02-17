import { ParallaxBackground } from "./components/ParallaxBackground";
import { Link } from "react-scroll";
import { TextBox } from "./components/TextBox";
import { PageProjects } from "./pages/PageProjects";
import { PageSkills } from "./pages/PageSkills";
import { PageContact } from "./pages/PageContact";

import "./styles/App.scss";

import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { projectsRef, skillsRef, contactRef } = useContext(AppContext);

  return (
    <div className="App" id="start">
      <ParallaxBackground />
      <div className="navList">
        <nav>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            HOME
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            SKILLS
          </Link>
          <Link
            to="#contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            CONTACT
          </Link>
        </nav>
      </div>

      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <PageSkills ref={skillsRef} />
      <TextBox />

      <TextBox />
      <PageProjects />
      <TextBox />
      <TextBox />
    </div>
  );
}

export default App;
