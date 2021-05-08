import React from "react";
import "./Home.css";
import HomeIcon from "./images/home_img.png";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
  return (
    <div className="home section_banner" id="home">
      <ParticleBackground />
      <div className="container home-items">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div className="banner_text_s2 text_md_center left">
              <h1
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                Autonomous yield and liquidity generation protocol{" "}
              </h1>
              <h5
                className="animation presale_txt text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                GORILLA GATE is <mark className="gradient_box">Live</mark> on
              </h5>
              <div
                className="transparent_bg tk_counter_inner m-lg-0 banner_token text-center px-0 animation"
                data-animation="fadeIn"
                data-animation-delay="1.4s"
              >
                <div
                  className="tk_countdown_time transparent_bg box_shadow_none border "
                  data-animation="fadeInUp"
                  data-animation-delay="1.2s"
                >
                  PancakeSwap V1
                </div>
              </div>
              <div
                className="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                <a
                  href="https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xf2a3D2484d2A440d12D037894F2F4639d2397494"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-2 btn-border btn-radius"
                >
                  Buy $GGATE Now!<i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_30 animation right"
              data-animation-delay="1.5s"
              data-animation="fadeInRight"
            >
              <img alt="banner_vector2" src={HomeIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
