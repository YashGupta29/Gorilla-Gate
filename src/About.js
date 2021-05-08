import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border text-center section_title">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s "
              >
                ABOUT GORILLA GATE
              </h4>
              <p
                className="animation text-left"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                GORILLA GATE is programmed to reward holders while increasing in
                both liquidity and value.
                <br /> It does this by applying a 8% tax on transactions :
                <br />✅ 2% goes to holders instantly
                <br />✅ 2% is auto-locked to liquidity
                <br />✅ 2% is used to buy back GORILLA GATE (market buy)
                <br />✅ 2% is used for marketing and development
              </p>
              <p
                className="animation text-left"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                🔥<b> Forever Deflationary supply/burn</b>
                <br />
                we will burn more than 20% of the total supply after launch and
                will send it to a black hole address; as this address also
                participates in the protocol, it accumulates more tokens,
                thereby effectively removing them from circulation. There is no
                limit to the burn, the black hole will keep growing, increasing
                the scarcity of GORILLA GATE.
              </p>

              <p
                className="animation text-left"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                ✨ <b>Continuously Rising Price Floor</b>
                <br />
                2% of every transaction is locked as liquidity in the
                Pancakeswap GORILLA GATE/BNB pool forever creating an ever
                rising price floor.
              </p>
            </div>
            <a
              href="https://t.me/GORILLA GATE"
              target="_blank"
              rel="noreferrer"
              className="btn-1 btn-default btn-radius video animation"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
              Join Telegram <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
