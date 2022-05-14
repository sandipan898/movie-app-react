import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-dark" style={{ background: '#9e9da1' }}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span><strong>Get connected with us on social networks</strong></span>
        </div>

        <div>
          <a rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sandipan-das-528166175/" className="me-4 text-reset">
            <i className="fa fa-facebook-f"></i>
          </a >
          <a rel="noreferrer"
            target="_blank"
            href="https://twitter.com/Sandipa63062640" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </a >
          <a rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sandipan-das-528166175/" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </a >
          <a rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/your_sandipan_das/" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </a >
          <a rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sandipan-das-528166175/" className="me-4 text-reset">
            <i className="fa fa-linkedin"></i>
          </a >
          <a rel="noreferrer"
            target="_blank"
            href="https://github.com/sandipan898" className="me-4 text-reset">
            <i className="fa fa-github"></i>
          </a >
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
          href="https://github.com/sandipan898"
        >
          Sandipan Das
        </a>
      </div>
    </footer>
  );
};

export default Footer;
