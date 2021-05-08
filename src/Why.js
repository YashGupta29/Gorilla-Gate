import React from "react";
import "./Why.css";
import Icon1 from "./images/service_img1.png";
import Icon2 from "./images/service_img2.png";
import Icon3 from "./images/service_img3.png";

const Why = () => {
  return (
    <div id="why">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center section_title">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                WHY GORILLA GATE ?
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="box_wrap text-center animation card"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              <img src={Icon1} alt="service_img1" />
              <h4>100% Safe</h4>
              <p>
                LP tokens locked for 1 year. Fair distribution without whales.
                Active and engaged team, ready to answer any questions.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="box_wrap text-center animation card"
              data-animation="fadeInUp"
              data-animation-delay="0.8s"
            >
              <img src={Icon2} alt="service_img2" />
              <h4>Passive Yield Farming</h4>
              <p>
                Thanks to $GGATE you can enjoy a passive yield farming mechanism
                without the explicit need of claiming your token.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="box_wrap text-center animation card"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
              <img src={Icon3} alt="service_img3" />
              <h4>Rising Price Floor</h4>
              <p>
                2% of every transaction is locked as liquidity in the
                Pancakeswap APEGATE/BNB pool forever creating an ever rising
                price floor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
