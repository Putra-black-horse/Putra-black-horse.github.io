import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Putra</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.instagram.com/" 
              className="home__social-icon" target="_blank">
              <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://x.com/PutraBlackHorse" className="home__social-icon" target="_blank">
              <i class="bx bxl-twitter"></i>
            </a>

            <a href="https://github.com/dashboard" className="home__social-icon" target="_blank">
              <i class="bx bxl-github"></i>
            </a>
          </div>

          <span className="footer__copy">© 2025 Putra. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
