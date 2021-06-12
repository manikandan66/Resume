import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__title">Manikandan</p>
      <div className="footer__social">
        <a href="#/" className="footer__icon">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#/" className="footer__icon">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#/" className="footer__icon">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <p>&#169; 2021 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
