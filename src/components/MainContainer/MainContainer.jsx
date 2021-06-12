import React from "react";
import maniImage from "../../assets/img/mani.jpeg";
import About from "../About/About";
import Contact from "../Contact";
import Skills from "../Skills";

const MainContainer = (props) => {
  return (
    <div className="l-main">
      <div className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color">Manikandan</span>
            <br /> Full stack developer
          </h1>

          <a href="#contact" className="button">
            Contact
          </a>
        </div>
        <div className="home__social">
          <a href="#/" className="home__social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#/" className="home__social-icon">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="home__img">
          <img src={maniImage} alt="" />
        </div>
      </div>
      <About img={maniImage} />
      <Skills />
      <Contact />
    </div>
  );
};
export default MainContainer;
