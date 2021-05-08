import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
// import "react-owl-carousel2/style.css";
import "./Roadmap.css";

const Roadmap = () => {
  const [state, setState] = useState({
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  //   const options = {
  //     loop: false,
  //     pagination: false,
  //     paginationNumbers: true,
  //     nav: true,
  //     navigator: true,
  //     center: false,
  //     dots: false,
  //     margin: 10,
  //     items: 5,
  //     responsive: {
  //       0: { items: 1 },
  //       380: { items: 2 },
  //       768: { items: 3 },
  //       992: { items: 4 },
  //       1200: { items: 5 },
  //     }

  return (
    <div id="roadmap" class="small_pb">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_default_light title_border text-center section_title">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                ROADMAP
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <div class="timeline owl-carousel small_space owl-loaded owl-drag"> */}
            <OwlCarousel
              className=" timeline owl-carousel small_space owl-loaded owl-drag"
              pagination="false"
              paginationNumbers="true"
              nav="true"
              navigator="true"
              dots="false"
              margin={10}
              responsive={state.responsive}
            >
              <div
                class="owl-stage-outer owl-height"
                style={{ height: "144px" }}
              >
                <div
                  class="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                    width: "1638px",
                  }}
                >
                  <div
                    class="owl-item active"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box complete">
                        <div class="timeline_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q2
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            Presale on DxSale
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box complete">
                        <div class="timeline_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q2
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            Launch on PancakeSwap, Audited by TechRate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box complete current">
                        <div class="timeline_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q2
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            CoinMarketCap and CoinGecko Applied{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box">
                        <div class="timeline_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q2
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            Yield Farming Partnership
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box">
                        <div class="roadmap_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q3
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            CEX Listings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box">
                        <div class="timeline_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q3
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            Mass and Marketing Promotion
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style={{ width: "204px", marginRight: "30px" }}
                  >
                    <div class="item">
                      <div class="timeline_box">
                        <div class="timeline_inner">
                          <div class="timeline_circle"></div>
                          <h6
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.3s"
                          >
                            Q3
                          </h6>
                          <p
                            class="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.4s"
                          >
                            Multicoin Wallet and Gateway Exchange
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="owl-nav">
                <div class="owl-prev">
                  <i class="fas fa-chevron-left"></i>
                </div>
                <button type="button" role="presentation" class="owl-prev">
                  <span aria-label="Previous">
                    <i class="fas fa-chevron-left"></i>
                  </span>
                </button>
                <div class="owl-next">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <button type="button" role="presentation" class="owl-next">
                  <span aria-label="Next">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </button>
              </div> */}
              {/* <div class="owl-nav">
                <div class="owl-prev">
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div class="owl-next">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div> */}
              {/* </div> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
