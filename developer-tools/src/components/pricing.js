import React from "react";
import PricingBlock from "./pricingblocks";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="row">
            <div className="col-12">
                <center className="m-5">
            <span className="pricing-title ">Pricing</span>
            </center>
            </div>
        </div>
        <div className="row">
          <div className="col-12 mb-5">
            <center> 
              <PricingBlock productName='React Template' price='20' points='Include' />
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
