import React from "react";

const About = (props) => {
  return (
    <div className="about section " id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div>
          <h2 className="about__subtitle">I'am Manikandan</h2>
          <p className="about__text">
            Extremely motivated to constantly develop my skills and grow
            professionally. I am confident in my ability to come up with
            interesting ideas to solve analytical problems and make an Impact.
          </p>
        </div>
        <div className="about__img">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
