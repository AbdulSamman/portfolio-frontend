import { Parallax } from "react-parallax";
import "../styles/parallaxStyle.scss";
// for more parallax another image edited
import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Background from "/images/Green.jpg";
import shadowImage from "/images/shadowForest.png";
import rightImage from "/images/palmen.png";
import tiger from "/images/tiger.png";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";

export const ParallaxBackground: React.FC = () => {
  const {
    spinnSpeed,
    person,
    moveTigerX,
    isOpacity,
    spinnSpeedLogo,
    handleMenuOpen,
    isMenuOpen,
  } = useContext(AppContext);

  return (
    <>
      <Parallax bgImage={Background} strength={80}>
        <div className="content">
          <div className="personalContainer">
            <h1 className="lastName">
              <span> ABDUL</span>
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
          <div className="layer" data-depth="0.4">
            <img src={shadowImage} alt="shadow" className="shadowBlackImg" />
          </div>
          <div className="layer" data-depth="0.6">
            <img src={rightImage} alt="right" className="rightImg" />
          </div>
          <div className="layer">
            <img
              src={tiger}
              alt="tiger"
              className="tiger"
              style={{ right: `${moveTigerX}%` }}
            />
          </div>
        </div>
      </Parallax>
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

            <span>ABDUL</span>
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
          {isMenuOpen && (
            <Link to="start" spy={true} smooth={true} offset={0} duration={500}>
              HOME
            </Link>
          )}

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            PROJECTS
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            SKILLS
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}>
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  );
};
