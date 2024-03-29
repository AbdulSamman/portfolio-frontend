import { ParallaxBackground } from "./components/ParallaxBackground";
import { Link } from "react-scroll";
import { PageProjects } from "./pages/PageProjects";
import { PageSkills } from "./pages/PageSkills";
import { PageContact } from "./pages/PageContact";
import "./styles/App.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { AiOutlineMenu } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isOpacity, spinnSpeedLogo, person, projects } =
    useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="App"
      id="start"
      onClick={() => isMenuOpen && setIsMenuOpen(false)}>
      {projects.length === 0 ? (
        <div className="loadingPage">
          <FaConnectdevelop className="spinnerLogoIcon" />

          <span>{person.lastName}</span>
        </div>
      ) : (
        <>
          <ParallaxBackground />
          <div className={`navList sticky`}>
            <div className="logo" style={{ opacity: `${isOpacity}` }}>
              <Link
                to="start"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}>
                <FaConnectdevelop
                  className="logoIcon"
                  style={{
                    animation: `spinner ${spinnSpeedLogo}s linear infinite`,
                  }}
                />

                <span>{person.lastName}</span>
              </Link>
            </div>
            <div className="burgerMenu" onClick={handleMenuOpen}>
              {!isMenuOpen ? (
                <AiOutlineMenu className="menuIcon" />
              ) : (
                <BsXLg className="menuIcon" />
              )}
            </div>
            <nav className={`menu ${isMenuOpen ? "menuOpen" : ""}`}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                PROJECTS
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                SKILLS
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                CONTACT
              </Link>
            </nav>
          </div>
          <PageProjects />
          <PageSkills />
          <PageContact />
        </>
      )}
    </div>
  );
}

export default App;
