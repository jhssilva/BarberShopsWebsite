import React from "react";
import "../css/footer.css";

const copyright = () => {
  return (
    <div className="footer-copyright text-white p-3 text-center">
      © 2021 Copyright: Barber Shops
    </div>
  );
};

const socialMediaIcons = () => {
  return (
    <section className="footer-social-media-icons text-center">
      <a
        className="btn btn-outline-dark btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-facebook-f"></i>
      </a>
      <a
        className="btn btn-outline-dark btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-twitter"></i>
      </a>

      <a
        className="btn btn-outline-dark btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-google"></i>
      </a>

      <a
        className="btn btn-outline-dark btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-instagram"></i>
      </a>

      <a
        className="btn btn-outline-dark btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-linkedin"></i>
      </a>

      <a
        className="btn btn-outline-dark btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-github"></i>
      </a>
    </section>
  );
};

const footer_inner_section = () => {
  return (
    <div className="row footer-inner-section">
      <div className="footer-inner-column col-4">{about()}</div>
      <div className="footer-inner-comumn col-4"></div>
      <div className="footer-inner-column col-4"></div>
    </div>
  );
};

const about = () => {
  return (
    <div className="footer-about">
      <div className="title">
        <h4>About</h4>
      </div>
      <div className="body">
        <p>
          We're the ones bringing you close to your barber. Originaly from
          Portugal, bringing value to you. Hope you enjoy!
        </p>
      </div>
    </div>
  );
};

const footer_inner = () => {
  return (
    <div className="footer-inner">
      <div className="container">
        {footer_inner_section()}
        <div className="row">{socialMediaIcons()}</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      {footer_inner()}
      <div className="footer-bar">{copyright()}</div>
    </footer>
  );
};

export default Footer;
