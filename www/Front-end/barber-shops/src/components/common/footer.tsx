import React from "react";
import "../css/footer.css";

const copyright = () => {
  return (
    <div className="footer-copyright text-center p-3">
      © 2021 Copyright: Barber Shops
    </div>
  );
};

const socialMediaIcons = () => {
  return (
    <section className="footer-social-media-icons mb-4 text-center">
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-facebook-f"></i>
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-twitter"></i>
      </a>

      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-google"></i>
      </a>

      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-instagram"></i>
      </a>

      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-linkedin"></i>
      </a>

      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fa fa-github"></i>
      </a>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div>Just to text</div>
      </div>
      {socialMediaIcons()}
      {copyright()}
    </footer>
  );
};

export default Footer;
