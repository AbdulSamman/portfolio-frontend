import "../styles/parallaxStyle.scss";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CircuitBackground } from "./CircuitBackground";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";

export const ParallaxBackground: React.FC = () => {
  const {
    spinnSpeed,
    person,
    isOpacity,
    spinnSpeedLogo,
    handleMenuOpen,
    isMenuOpen,
  } = useContext(AppContext);

  return (
    <>
      <header className="hero">
        <CircuitBackground />
        <div className="content">
          <div className="personalContainer">
            <span className="eyebrow">&lt;engineering × code /&gt;</span>
            <h1 className="lastName">
              <span>{person.lastName || "SAMMAN"}</span>
            </h1>
            <h2 className="animatedText">
              <span className="firstName">HI, I'M {person.firstName}</span>{" "}
              <span className="title">{person.title} ...</span>
            </h2>
            <div className="logoIcon">
              <FaConnectdevelop
                className="spinnerLogoIcon"
                style={{
                  animation: `spinner ${spinnSpeed}s linear infinite`,
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <div className={`navList sticky`}>
        <div className="logo" style={{ opacity: `${isOpacity}` }}>
          <Link
            to="start"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <FaConnectdevelop
              className="logoIcon"
              style={{
                animation: `spinner ${spinnSpeedLogo}s linear infinite`,
              }}
            />

            <span>ABDUL</span>
          </Link>
        </div>
        <div className="burgerMenu" onClick={handleMenuOpen}>
          {!isMenuOpen ? (
            <AiOutlineMenu className="menuIcon" />
          ) : (
            <BsXLg className="menuIconX" />
          )}
        </div>
        <nav className={`menu ${isMenuOpen ? "menuOpen" : ""}`}>
          {isMenuOpen && (
            <>
              <div>
                <BsXLg className="menuIcon" />
              </div>
              <Link
                to="start"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                HOME
              </Link>
            </>
          )}

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            to="engineering"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            ENGINEERING
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            SKILLS
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  );
};
