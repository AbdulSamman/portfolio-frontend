import { ParallaxBackground } from "./components/ParallaxBackground";
import { Link } from "react-scroll";
import { PageProjects } from "./pages/PageProjects";
import { PageSkills } from "./pages/PageSkills";
import { PageContact } from "./pages/PageContact";
import "./styles/App.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { AiOutlineMenu } from "react-icons/ai";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaConnectdevelop } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function App() {
  const { isOpacity } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="App"
      id="start"
      onClick={() => isMenuOpen && setIsMenuOpen(false)}
    >
      {isLoading ? (
        <div className="loadingPage">
          <FaConnectdevelop className="spinnerLogoIcon" />
          <span>SAMMAN</span>
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
                duration={500}
              >
                <FaConnectdevelop className="logoIcon" />
                <span>SAMMAN</span>
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
                duration={500}
              >
                PROJECTS
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                SKILLS
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
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
