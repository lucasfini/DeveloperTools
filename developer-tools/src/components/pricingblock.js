import React, { useState } from "react";

import { IoIosCheckmark } from "react-icons/io";
import { TfiMoney } from "react-icons/tfi";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';


const PricingBlock1 = ({ id, logo, productName, price, items, type }) => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showFullCard, SetShowFullCard] = useState(true);
  const [email, setEmail] = useState("");
  const cardHeight = showFullCard ? 'auto' : '300px';
  const handleGetToolClick = () => {
    setShowEmailInput(true);
  };

  const handleGetMoreInfoClick = () => {
    SetShowFullCard(!showFullCard);
   
  };

 

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission logic here, e.g., send the email
    console.log("Email submitted:", email);
  };

  return (
    <div className={`pricingblock-square`}>
      <div className="container">
        <div className="row mt-1 ">
          <div id="border" className="col-12 pricingblock-top-border"></div>
        </div>
        <center>
          <div className="row">
            <div className="col-12">
              <span className="pricingblock-icons">{logo}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span className="pricingblock-title"> {productName} </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <span className="pricingblock-type"> {type} </span>
            </div>
          </div>
          
         
            <div className="row ps-5 pe-5 collapse show" id={`collapse-Card-${id}`}>
              <div className="col-12">
                <ul className="pricing-list">
                  {items.map((item, index) => (
                    <li key={index} className="pricing-list-item">
                      <div className="row">
                        <div className="col-12  separator"></div>
                      </div>
                      <div className="row ">
                        <div className="col-2 d-flex justify-content-center align-items-center">
                          <div className="checkmark-icon">
                            <IoIosCheckmark />
                          </div>
                        </div>

                        <div className="col-10 mt-2 d-flex justify-content-center align-items-center">
                          <div className="pricingblock-product-info">
                            {item}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div className="row">
                    <div className="col-12  separator"></div>
                  </div>
                </ul>
              </div>
            </div>
             <div className="row mt-2">
             <div className="col-12 d-flex align-items-center justify-content-center">
               <span className="d-flex justify-content-start align-items-center priceblock-money-symbol">
                 <TfiMoney />
               </span>
               <span className="priceblock-price">
                 {price}
                 <span className="priceblock-month"></span>
               </span>
             </div>
           </div>
          
     
       
      
          <div className="row mt-3  ">
            <div className="col-12 d-flex align-items-center justify-content-center">
              {showEmailInput ? (
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailInputChange}
                    className="pricingblock-email"
                  />
                  <button
                    className="pricingblock-submit-button ms-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleGetToolClick}
                  className="pricingblock-button p-2"
                >
                 Start now
                </button>
              )}
            </div>
          </div>
                    <div className="row h-100">
          <div className="col-12">
          {showFullCard ? 
              <button  data-bs-toggle="collapse" data-bs-target={`#collapse-Card-${id}`} aria-expanded="false" aria-controls={`collapse-Card-${id}`} onClick={handleGetMoreInfoClick} className="pricingblock-more-info"><IoIosArrowUp/></button>
              :  <button data-bs-toggle="collapse" data-bs-target={`#collapse-Card-${id}`} aria-expanded="false" aria-controls={`collapse-Card-${id}`} onClick={handleGetMoreInfoClick} className="pricingblock-more-info"><IoIosArrowDown/></button>}
            </div>
          </div>

        </center>
      </div>
    </div>
  );
};

export default PricingBlock1;
