import React from "react";
import PricingBlock from "./pricingblocks";
import PricingBlock1 from "./pricingblock";

import { PiToolboxLight } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";
import { SiOpenaigym } from "react-icons/si";
import { BsSquare, BsCheckSquare } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";
import {TfiMoney} from "react-icons/tfi";

const Pricing = () => {

  const logo1 = <BiLogoReact/>;
  const logo2 = <RiOpenaiFill/>;
  const logo3 = <SiOpenaigym/>;
  const logo4 = <IoLogoElectron/>;

  const productItems = [
    'Quick six blind smart out burst. ',
    'Wrong do point avoid by fruit learn or in death.',
    'On recommend tolerably my belonging or am.',
    'Consider now provided laughter boy landlord dashwood.'
  ];

  const price1 = '0';
  const type1 = 'JAVASCRIPT';
  const type2 = 'TYPESCRIPT';
  const reactName = 'REACT';
  const gptName = 'CHAT-GPT';
  const openaiName = 'OPEN-AI';
  const electronName = 'ELECTRON';



  return (
    <section id="pricing" className="pricing-section m-3">
      <div className="container">
        <div className="row">
            <div className="col-12">
                <center className="m-5">
            <span className="pricing-title ">Simple and transparent <span className="pricing-title-2"> pricing.</span></span>
            </center>
            </div>
        </div>
        <div className="row">
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo1} productName={reactName} items={productItems} type={type1} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo2} productName={gptName} items={productItems} type={type1} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo3} productName={openaiName} items={productItems} type={type1} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo4} productName={electronName} items={productItems} type={type1} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo1} productName={reactName} items={productItems} type={type2} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo2} productName={gptName} items={productItems} type={type2} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo3} productName={openaiName} items={productItems} type={type2} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
          <div className="col-3 mb-5">
            <center> 
            <PricingBlock1 logo={logo4} productName={electronName} items={productItems} type={type2} price={price1}/>
            {/*  <PricingBlock productName='React Template' price='20' points='Include' /> */}
            </center>
          </div>
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
