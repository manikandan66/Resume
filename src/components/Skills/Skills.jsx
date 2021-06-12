import React from "react";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-container">
        <h2 className="skills__subtitle">Profesional Skills</h2>
        <div className="skills__container_column">
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon"></i>
              <span className="skills__name">HTML5</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon"></i>
              <span className="skills__name">CSS3</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon"></i>
              <span className="skills__name">JAVASCRIPT</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-react skills__icon"></i>
              <span className="skills__name">ReactJs</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-react skills__icon"></i>
              <span className="skills__name">React Native</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-python skills__icon"></i>
              <span className="skills__name">Python</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-django skills__icon"></i>
              <span className="skills__name">Django</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-amazon skills__icon"></i>
              <span className="skills__name">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
