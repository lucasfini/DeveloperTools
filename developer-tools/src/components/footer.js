import React from "react";
import { CFooter, CLink } from "@coreui/react";

const Footer = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer-section ">
      <div className="container">
        <div className="row p-5">
          <div className="col-4">
            <div className="row ">
              <div className="col-12">
                <a>
                  {" "}
                  <img
                    src={require("../img/img.JPG")}
                    className="rounded"
                    alt="hah"
                    width="35"
                    height="35"
                  ></img>
                  <span className="ms-2 nav-title ">
                    General<span className="nav-title-2">Tooling</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="footer-caption">Develop with ease</label>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label className="footer-copyright">Copyrigt C 2023 - All Rights Reserved </label>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex ">
            <div className="col-6 d-flex align-items-center  flex-column">
              <div className="row">
                <div className="col-12 ">
                  <labels className="footer-label">LINKS</labels>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button  onClick={() => scrollToSection('faq')}  type="button" className="footer-button">
                    Faq
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button  onClick={() => scrollToSection('pricing')}  className="footer-button"> Pricing </button>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center  flex-column">
              <div className="row">
                <div className="col-12">
                  <label className="footer-label" >LEGAL</label>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="footer-button">Terms of Service</button>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button className="footer-button">Privacy Policy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
