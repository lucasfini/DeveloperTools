import React from "react";
import { PiToolboxLight } from "react-icons/pi";
import { IconContext } from "react-icons/lib";
import backgroundImage from "../img/hero-img-4.jpg";
import Nav from "./nav";

const Hero = () => {
  const heroStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    minHeight: "100vh", // Set a minimum height for the hero section

    // You can add more CSS properties as needed
  };
  return (
    <section
      id="section1"
      style={heroStyles}
      className="hero-section pt-3 pb-3 "
    >
      <div className="row">
        <div className="col-12 mb-5">
          <Nav />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-12 d-flex flex-column p-5">
            <center>
              <div className="row ">
                <div className="col-12 col-lg-12 d-flex  align-items-center  justify-content-center   ">
                  <h1 className="hero-title">
                    {" "}
                    <p className="hero-title-2">SUPERCHARGE</p> your development
                  workflow
                  </h1>
                </div>
              </div>
            </center>
            <div className="row  justify-content-center align-items-center ">
              {
              <div className="col-12 col-lg-12  d-flex align-items-center justify-content-center pt-4">
                <p className="hero-description ">
                  Empowering Developers to Code Faster, Smarter, and with Confidence.
                </p>
              </div>
  }
            </div>

            <div className="row ">
              <center>
                <div className="col-12 col-lg-12 d-flex justify-content-center  align-items-center pt-4">
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
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
