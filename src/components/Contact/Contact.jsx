import React from "react";

const Contact = (props) => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <div>
          <form action="" className="contact__form">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea
              name=""
              id=""
              placeholder="Message"
              cols="0"
              rows="10"
              className="contact__input"
            ></textarea>
            <input
              type="button"
              value="Submit"
              className="contact__button button"
            />
          </form>
        </div>
        <div>
          <div className="contact__details">
            <i className="bx bxs-phone contact__icon"></i>
            <p>9944565819</p>
          </div>
          <div className="contact__details">
            <i className="bx bx-mail-send contact__icon"></i>
            <p>manikandan97.ceg@gmail.com</p>
          </div>
          <div className="contact__details">
            <i className="bx bxs-map contact__icon"></i>
            <p>Chennai, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
