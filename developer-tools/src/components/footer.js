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
    <div className="footer-section  ">
      <div className="container ">
        <div className="row pt-3 ps-5 pe-5 pb-3">
          <div className="col-12 d-flex  justify-content-md-center flex-column align-items-center align-items-lg-start align-items-md-start col-sm-4 col-md-4 col-lg-4">
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
                  <span className="ms-2 footer-title ">
                    General<span className="footer-title-2">Tooling</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 ">
                <label className="footer-caption">Empower <span className="footer-caption-2">yourself</span></label>
              </div>
            </div>

          </div>
          <div className="col-12 col-sm-8  d-flex ">
            <div className="col-6 d-flex align-items-center  flex-column">
              <div className="row">
                <div className="col-12 ">
                  <labels className="footer-label">LINKS</labels>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button  onClick={() => scrollToSection('how-it-works')}  type="button" className="footer-button">
                    How it works
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button  onClick={() => scrollToSection('pricing')}  type="button" className="footer-button">
                    Pricing
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button  onClick={() => scrollToSection('faq')}  className="footer-button"> FAQ </button>
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
        <div className="row pb-3 ">
              <div className="col-12 d-flex justify-content-center align-items-center footer-separator">
                <label className="footer-copyright">© 2023 General Tooling. All Rights reserved</label>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
