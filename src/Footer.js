import React from "react";
import "./Footer.css";
import FooterLogo from "./images/footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 left">
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home" className="page-scroll f_logo">
                  <img alt="logo" src={FooterLogo} />
                </a>
              </div>
              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  GORILLA GATE is programmed to reward holders while increasing
                  in both liquidity and value.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20"></div>

            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20 right">
              <h4
                className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.1s"
              >
                Contact Us
              </h4>
              <ul className="footer_link list_none link-box">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <a
                    href="https://t.me/GORILLA GATE"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    <i className=" fa fa-telegram"></i> Telegram
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.3s"
                >
                  <a
                    href="https://twitter.com/APE_GATE"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    <i className=" fa fa-twitter"></i> Twitter
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <a
                    href="https://GORILLA GATE.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    <i className=" fa fa-medium"></i> Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <div className="row textbox">
            <div className="col-md-6 text">
              <p className="copyright"> © 2021 By GORILLA GATE</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
