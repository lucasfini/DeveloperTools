import React from "react";
import { PiToolboxLight } from "react-icons/pi";
import { IconContext } from "react-icons/lib";
import backgroundImage from "../img/hero-img-4.jpg";
import Nav from "./nav";
import Fade from "react-reveal/Fade";
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set a minimum height for the hero section
    filter: `blur(1px)`,

    // You can add more CSS properties as needed
  };
  return (
   
    <section id="section1" className="hero-section pt-3 pb-3 ">
      <div className="row">
        <div className="col-12 mb-5">
          <Nav />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-12 d-flex flex-column p-5">
            <Fade top cascade>
              <div>
            <center>
              <div className="row ">
                <div className="col-12 col-lg-12 d-flex  align-items-center  justify-content-center   ">
                  <p className=" hero-title ">
                    {" "}
                    <p className="hero-title-2">SUPERCHARGE</p> your
                    development workflow
                  </p>
                </div>
              </div>
            </center>
            <div className="row  justify-content-center align-items-center ">
              {
                <center>
                <div className="col-12 col-lg-12  d-flex align-items-center justify-content-center pt-4">
                  <p className=" hero-description ">
                    Empowering Developers to Code Faster, Smarter, and with
                    Confidence.
                  </p>
                </div>
                </center>
              }
            </div>
            </div>
            </Fade>

            <div className="row ">
              <center>
                <div className="col-12 col-lg-12 d-flex justify-content-center  align-items-center pt-4">
                  <button
                    role="button"
                    onClick={() => scrollToSection("pricing")}
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
