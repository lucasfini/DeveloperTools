import React from "react";
import { PiToolboxLight } from "react-icons/pi";
import { IconContext } from "react-icons/lib";

const Hero = () => {
  return (
    <section id="section1" className="hero-section pt-3 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5">
            <div className="row mt-5">
              <div className="col-12 col-lg-12 d-flex mt-5  align-items-center ">
                <h1 className="hero-title">Develop with ease</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-12 d-flex align-items-center pt-4">
                <p className="hero-description">
                  Unlock your full potential with our suite of developer tools.
                  From frontend to backend, making components to a quick start
                  app configurator, we've got you covered. Say goodbye to
                  repetitive tasks and hello to productivity.
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-lg-12 d-flex  align-items-center pt-4">
                <button
                  role="button"
                  className="hero-button align-items-center d-flex ps-5 pt-3 pb-3 pe-5 "
                >
                  <IconContext.Provider
                    value={{ backgroundColor: " #61A0Af", size: "24px" }}
                  >
                    <PiToolboxLight />{" "}
                    <span className="ps-2 hero-button-text">
                      Explore Our Tools{" "}
                    </span>
                  </IconContext.Provider>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-4 mt-5 mb-5 d-flex justify-content-center">
            <img
              src={require("../img/toolbox.png")}
              className="rounded hero-image"
              alt="hah"
            
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
