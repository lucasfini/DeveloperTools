import React from "react";
import { PiToolboxLight, PiDownloadSimpleLight } from "react-icons/pi";
import { BsCodeSlash } from "react-icons/bs";
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import {LiaCloneSolid} from 'react-icons/lia';


const About = () => {
  return (
    <section id="how-it-works" className="about-section mt-1 mb-1 pb-5 ">
      <div className="container ">
        <div className="row  ">
          <div className="col-12 d-flex justify-content-center ">
            <div className=" mb-5 mt-5 ">
              <label className="about-title">
                With <label className="about-title-2">ease</label> in mind
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-5 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
            <div className="row ">
              <div className="col-12  col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex ">
                <div className="about-box">
                  <div className="row ps-2">
                    <div className="col-3  d-flex justify-content-center align-items-center ">
                      <div className="row d-flex align-items-center ">
                        <div className="col-12 d-flex align-items-center justify-content-center  icon-box-1 ">
                          <span className="d-flex align-items-center ">
                            <BsCodeSlash />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 p-0  ">
                      <div className="row">
                        <div className="col-12  ">
                          <label className="about-desc "><span className="about-number">1.</span> Product</label>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-12 d-flex  ">
                          <span className="about-d">
                            Pick a <span className="about-special-word">template</span> based on the project you wish to
                            complete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex ">
                <div className="about-box">
                  <div className="row ps-2">
                    <div className="col-3  d-flex justify-content-center align-items-center ">
                      <div className="row d-flex align-items-center ">
                        <div className="col-12 d-flex align-items-center justify-content-center  icon-box-2 ">
                          <span className="d-flex align-items-center ">
                            <MdOutlineMarkEmailRead />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 p-0  ">
                      <div className="row">
                        <div className="col-12  ">
                          <label className="about-desc "><span className="about-number">2.</span> Email</label>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-12 d-flex  ">
                          <span className="about-d">
                          Click <span className="about-special-word">Get Tool.</span> Enter your email, then click <span className="about-special-word">Submit.</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex ">
                <div className="about-box">
                  <div className="row ps-2">
                    <div className="col-3  d-flex justify-content-center align-items-center ">
                      <div className="row d-flex align-items-center ">
                        <div className="col-12 d-flex align-items-center justify-content-center  icon-box-3 ">
                          <span className="d-flex align-items-center ">
                            <AiFillGithub />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 p-0  ">
                      <div className="row">
                        <div className="col-12  ">
                          <label className="about-desc "><span className="about-number">3.</span> Github</label>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-12 d-flex  ">
                          <span className="about-d">
                          A <span className="about-special-word">Git </span>link will be sent to the email entered. 
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex ">
                <div className="about-box">
                  <div className="row ps-2">
                    <div className="col-3  d-flex justify-content-center align-items-center ">
                      <div className="row d-flex align-items-center ">
                        <div className="col-12 d-flex align-items-center justify-content-center  icon-box-4 ">
                          <span className="d-flex align-items-center ">
                            <PiDownloadSimpleLight/>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 p-0  ">
                      <div className="row">
                        <div className="col-12  ">
                          <label className="about-desc "><span className="about-number">4.</span> Download</label>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-12 d-flex  ">
                          <span className="about-d">
                           <span className="about-special-word">Download/Clone </span> the git to recieve your product.
                          </span>
                        </div>
                      </div>
                    </div>
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
