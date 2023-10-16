import React from "react";
import Fade from "react-reveal/Fade";
const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand">
            {" "}
            <img
              src={require("../img/img.JPG")}
              className="rounded"
              alt="hah"
              width="45"
              height="45"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> 

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-lg-0 d-flex justify-content-center align-items-center"  style={{ marginLeft: 'auto' }}>
              <Fade left cascade>
              <li class="nav-item d-flex justify-content-center align-items-center">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="nav-Button m-2"
                >
                  How it works
                </button>
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="nav-Button  m-2"
                >
                  Pricing
                </button>
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center">
                <button
                  onClick={() => scrollToSection("faq")}
                  className="nav-Button  m-2"
                >
                  FAQ
                </button>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </nav>

  );
};

export default Nav;
