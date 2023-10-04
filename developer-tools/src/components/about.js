import React from "react";
import { PiToolboxLight } from "react-icons/pi";

const About = () => {
  return (
    <section className="about-section p-5">
      <div className="container">
        <div className="row ">
          <div className="col-12 ">
            <div className="d-flex justify-content-center about-title mb-5">
              <label>Next Steps</label>
            </div>
            <div className="row ">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="row">
                  <div className="col-3 d-flex about-box  flex-column" >
                    <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-center ">
                        <label className="about-number"> 1 </label>
                      </div>
                    </div>
                    <center>
                      <div className="row ">
                        <div className="col-12 ">
                          <label className="about-desc  d-flex align-items-center">
                            {" "}
                            Below, choose a template and a language.
                          </label>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="col-3  d-flex about-box flex-column ">
                  <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-center">
                        <label className="about-number"> 2 </label>
                      </div>
                    </div>
                    <center>
                      <div className="row ">
                        <div className="col-12  ">
                        <label className="about-desc">
                      {" "}
                       Enter your email and click:
                
                    </label>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-12 d-flex  justify-content-center mt-2">
            
                      <button className="about-button">
                        {" "}
                        <PiToolboxLight /> Get Tool
                      </button>
                    
                        </div>
                      </div>
                    </center>      
                  </div>
                  <div className="col-3  d-flex about-box flex-column">
                  <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-center ">
                        <label className="about-number"> 3 </label>
                      </div>
                    </div>
                    <center>
                      <div className="row ">
                        <div className="col-12  ">
                          <label className="about-desc ">
                            {" "}
                            A git repository link will be sent to the email entered.
                          </label>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="col-3  d-flex about-box flex-column ">
                  <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-center">
                        <label className="about-number"> 4 </label>
                      </div>
                    </div>
                    <center>
                      <div className="row ">
                        <div className="col-12 ">
                          <label className="about-desc">
                            {" "}
                             Download/clone the git repository and enjoy your new
                      template.
                          </label>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
