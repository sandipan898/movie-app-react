import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks</span>
        </div>

        <div>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-facebook-f"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-github"></i>
          </Link>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright{" "}
        <a
          className="text-reset fw-bold"
          rel="noreferrer"
          target="_blank"
          href="https://sandipandas.herokuapp.com"
        >
          Sandipan Das
        </a>
      </div>
    </footer>
  );
};

export default Footer;
