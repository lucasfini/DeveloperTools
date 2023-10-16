import React from "react";
import About_Box from "./about-box";
import { PiToolboxLight, PiDownloadSimpleLight } from "react-icons/pi";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { LiaCloneSolid } from "react-icons/lia";
import Fade from 'react-reveal/Fade';

const About = () => {


  

  const instruction1 = {
    number: 1,
    title: "Select",

    body: (
      <span>
        Choose a <span className="about-special-word">template </span> that
        matches your project's requirements.
      </span>
    ),
    img: <BsCodeSlash />,
  };

  const instruction2 = {
    number: 2,
    title: "Access",

    body: (
      <span>
        <li className="ms-3">
          {" "}
          Click <span className="about-special-word">"Start now" </span>{" "}
        </li>
      {" "}
        <li  className="ms-3">
          Provide your email and click{" "}
          <span className="about-special-word">"Submit."</span>{" "}
        </li>
      </span>
    ),
    img: <MdOutlineMarkEmailRead />,
  };

  const instruction3 = {
    number: "3",
    title: "Receive",

    body: (
      <span>
        A <span className="about-special-word">Git </span>
         will be promptly sent to the provided email address.
      </span>
    ),
    img: <AiFillGithub />,
  };

  const instruction4 = {
    number: 4,
    title: "Acquire",

    body: (
      <span>
        <span className="about-special-word">Download  </span>or <span className="about-special-word">Clone </span> the Git repository using the link from your email.
      </span>
    ),
    img: <PiDownloadSimpleLight />,
  };

  return (
    <section id="how-it-works" className="about-section   pb-5 ">
      <div className="container ">
        <div className="row  ">
          <div className="col-12 d-flex justify-content-center ">
            <div className=" mb-5 mt-5 ">
              <label className="about-title">
                Effortless Access to{" "}
                <label className="about-title-2">Powerful</label> Tools
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-5 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
          <Fade left cascade>
            <div className="row ">
              <div className="col-12 col-xl-6 col-lg-6 d-flex justify-content-xl-end justify-content-lg-end  justify-content-center ">
                <About_Box {...instruction1} />
              </div>
              <div className=" col-12  col-xl-6 col-lg-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-center">
                <About_Box {...instruction2} />
              </div>
              <div className=" col-12  col-xl-6 col-lg-6 d-flex justify-content-xl-end justify-content-lg-end  justify-content-center">
                <About_Box {...instruction3} />
              </div>
              <div className=" col-12 col-xl-6  col-lg-6  d-flex justify-content-xl-start justify-content-lg-start justify-content-center">
                <About_Box {...instruction4} />
              </div>
          
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
