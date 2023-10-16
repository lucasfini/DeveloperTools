import React, { useState } from "react";
import PricingBlock from "./pricingblocks";
import PricingBlock1 from "./pricingblock";

import { PiToolboxLight } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";
import { SiOpenaigym } from "react-icons/si";
import { BsSquare, BsCheckSquare } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";
import { TfiMoney } from "react-icons/tfi";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import Fade from "react-reveal/Fade";
const Pricing = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const logo1 = <BiLogoReact />;
  const logo2 = <RiOpenaiFill />;
  const logo3 = <SiOpenaigym />;
  const logo4 = <IoLogoElectron />;

  const productItems = [
    "Quick six blind smart out burst. ",
    "Wrong do point avoid by fruit learn or in death.",
    "On recommend tolerably my belonging or am.",
    "Consider now provided laughter boy landlord dashwood.",
  ];

  const productItems1 = [
    "Quick six blind smart out burst. ",
    "Wrong do point avoid by fruit learn or in death.",
    "Consider now provided laughter boy landlord dashwood.",
  ];
  const productItems2 = [
    "Quick six blind smart out burst. ",
    "Wrong do point avoid by fruit learn or in death.",
  ];
  const price1 = "0";
  const type1 = "JAVASCRIPT";
  const type2 = "TYPESCRIPT";
  const reactName = "REACT";
  const gptName = "CHAT-GPT";
  const openaiName = "OPEN-AI";
  const electronName = "ELECTRON";

  return (
    <section id="pricing" className="pricing-section ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <center className="m-5">
              <span className="pricing-title ">
                Simple and transparent{" "}
                <span className="pricing-title-2"> pricing.</span>
              </span>
            </center>
          </div>
        </div>
        <center>
          <div className="row d-flex justify-content-center mb-2 ">
            <div className="col-xl-12 d-flex justify-content-center">
              <div className="dropdown-center mb-3 ">
                <button
                  className=" pricing-btn dropdown-toggle pricing-dropdown  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  variant="primary"
                  id="dropdown-basic"
                >
                  {selectedLanguage === "JavaScript" && (
                    <i className="priceblock-icon">
                      {" "}
                      <DiJavascript1 />
                    </i>
                  )}
                  {selectedLanguage === "TypeScript" && (
                    <i className="priceblock-icon">
                      {" "}
                      <BiLogoTypescript />
                    </i>
                  )}
                  {selectedLanguage}
                </button>
                <ul className="dropdown-menu  pricing-dropdown-item  dropdown-menu-end">
                  <li className="p-1">
                    <button
                      className="dropdown-item d-flex align-items-center pricing-dropdown-button justify-content-center"
                      type="button"
                      data-bs-theme-value="auto"
                      aria-pressed="false"
                      href="#"
                      onClick={() => handleLanguageChange("JavaScript")}
                      active={selectedLanguage === "JavaScript"}
                    >
                      <i className="">
                        {" "}
                        <DiJavascript1 />
                      </i>{" "}
                      JavaScript
                    </button>
                  </li>
                  <li className="p-1">
                    <button
                      className="dropdown-item d-flex align-items-center  pricing-dropdown-button justify-content-center"
                      type="button"
                      data-bs-theme-value="auto"
                      aria-pressed="false"
                      href="#"
                      onClick={() => handleLanguageChange("TypeScript")}
                      active={selectedLanguage === "TypeScript"}
                    >
                      <i className="">
                        {" "}
                        <BiLogoTypescript />
                      </i>{" "}
                      TypeScript
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </center>
        {selectedLanguage === "JavaScript" && (
          <Fade bottom cascade>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 mb-5 ">
                <center>
                  <PricingBlock1
                    id={1}
                    logo={logo1}
                    productName={reactName}
                    items={productItems}
                    type={type1}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
              <div className="col-12  col-lg-3 col-md-6 mb-5 ">
                <center>
                  <PricingBlock1
                    id={2}
                    logo={logo2}
                    productName={gptName}
                    items={productItems1}
                    type={type1}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
              <div className="col-12  col-lg-3 col-md-6 mb-5 ">
                <center>
                  <PricingBlock1
                    id={3}
                    logo={logo3}
                    productName={openaiName}
                    items={productItems}
                    type={type1}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
              <div className="col-12  col-lg-3 col-md-6 mb-5 ">
                <center>
                  <PricingBlock1
                    id={4}
                    logo={logo4}
                    productName={electronName}
                    items={productItems2}
                    type={type1}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
            </div>
          </Fade>
        )}
        {selectedLanguage === "TypeScript" && (
          <Fade bottom cascade>
            <div className="row">
              <div className="col-12  col-lg-3 col-md-6 mb-5">
                <center>
                  <PricingBlock1
                    id={5}
                    logo={logo1}
                    productName={reactName}
                    items={productItems}
                    type={type2}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
              <div className="col-12  col-lg-3 col-md-6 mb-5">
                <center>
                  <PricingBlock1
                    id={6}
                    logo={logo2}
                    productName={gptName}
                    items={productItems1}
                    type={type2}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
              <div className="col-12  col-lg-3 col-md-6 mb-5">
                <center>
                  <PricingBlock1
                    id={7}
                    logo={logo3}
                    productName={openaiName}
                    items={productItems}
                    type={type2}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
              <div className="col-12  col-lg-3 col-md-6 mb-5">
                <center>
                  <PricingBlock1
                    id={8}
                    logo={logo4}
                    productName={electronName}
                    items={productItems2}
                    type={type2}
                    price={price1}
                  />
                  {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
                </center>
              </div>
            </div>
          </Fade>
        )}


        <div>
          <div className="row d-flex h-100  justify-content-center">
            <div className="col-12 d-flex h-100 align-items-end justify-content-center">
              <label className="pricing-soon-text m-3 ">
                With more tools coming{" "}
                <span className="pricing-soon-text-2">soon.</span>
              </label>
            </div>
          </div>
          <Fade left cascade>
          <div className="row d-flex h-100 pb-4  justify-content-center">
            <div className="col-12  col-lg-3 col-md-6 m-1 d-flex h-100 align-items-center justify-content-center">
              <label className="pricing-more-tools d-flex justify-content-center ">
                {" "}
               Json Beautifier
              </label>
              </div>
            
              <div className="col-12  col-lg-3 col-md-6 m-1 d-flex h-100 align-items-center justify-content-center">
              <label className="pricing-more-tools  d-flex justify-content-center ">
                {" "}
                DB analytics tool  
              </label>
              </div>
             
              <div className="col-12  col-lg-3 col-md-6 m-1  d-flex h-100 align-items-center justify-content-center">
              <label className="pricing-more-tools d-flex justify-content-center ">
                {" "}
                OS images
              </label>
            </div>
          </div>
  
          </Fade>
        </div>
      </div>
    </section>
  );

  // Chatgpt Front end template
  // OpenAI frontent template
  // Electron with hot reload template
  // React Template
};

export default Pricing;
