import React from "react";
import Fade from 'react-reveal/Fade';
const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="nav-section ">
      <div className="container">
      <div className="row ">
        <div className="col-md-12 col-12  d-flex ">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3   d-flex align-items-center justify-content-center justify-content-lg-start justify-content-md-center me-lg-5 p-1 ">
            <a>
              {" "}
              
              <img
                src={require("../img/img.JPG")}
                className="rounded"
                alt="hah"
                width="45"
                height="45"
              ></img>
  
  {/*
              <span className=" nav-title ">
                General<span className="nav-title-2">Tooling</span>
              </span>
  */}
            </a>
          </div>
          <Fade left cascade>
          <div className="col-12 col-sm-6 col-md-4 col-lg-9 d-flex align-items-center justify-content-end">
            <div className="col-2 d-flex justify-content-end p-3">
              
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="nav-Button hidden navdelay"
              >
                How it works
              </button>
            </div>
            <div className="col-1 d-flex justify-content-center p-3">
              <button
                onClick={() => scrollToSection("pricing")}
                className="nav-Button hidden navdelay"
              >
                Pricing
              </button>
            </div>
            <div className="col-1 p-3">
              <button
                onClick={() => scrollToSection("faq")}
                className="nav-Button hidden navdelay "
              >
                FAQ
              </button>
            </div>
          </div>
          </Fade>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Nav;
