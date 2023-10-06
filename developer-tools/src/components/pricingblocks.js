import React, { useState, Component } from "react";
import { PiToolboxLight } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";
import { SiOpenaigym } from "react-icons/si";
import { BsSquare, BsCheckSquare } from "react-icons/bs";


const PricingBlock = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);

      
  };
//Test template checkbox
  const logTemplate = () => {
   if (selectedOption !== null){
    //Test language checkbox
    if (selectedOption2 !== null) {
     // Test Email 
     // Regular expression to check if the input follows a basic email format
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // Test the input against the email pattern
    const isValid = emailPattern.test(email);
    setIsValidEmail(isValid);
    if (isValidEmail === true){
      console.log('Entered email:', email);
      console.log('Template:', selectedOption);
      console.log('Language:', selectedOption2);
      setSuccessMessage('Email sent!');
      setErrorMessage('');
    }
    else{
      setErrorMessage('Please enter a valid email.');
      setSuccessMessage('');
    }
    // Update the state to indicate if the input is a valid email
    
    }
    else {
      setErrorMessage('Please choose a language. ');
    }
   } 
   else {
    setErrorMessage('Please choose a template. ');
   }
    

    

    

  
    console.log('Entered email:', email);
    console.log('Template:', selectedOption);
    console.log('Language:', selectedOption2);

  };


  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };



  const handleCheckboxChange2 = (option) => {
    setSelectedOption2(option);
  };

  return (
    <div className="pricingblock-square mb-5 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <label className=" pricingblock-label-title">
              Choose from four templates.
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <div class="checkbox-wrapper-16">
              <label class="checkbox-wrapper">
                <input
                  type="checkbox"
                  class="checkbox-input"
                  value="ChatGPT"
                  checked={selectedOption === "ChatGPT"}
                  onChange={() => handleCheckboxChange("ChatGPT")}
                />
                <span class="checkbox-tile">
                  <span class="checkbox-icon">
                    <SiOpenaigym />
                  </span>
                  <span class="pricingblock-label">ChatGPT Front-End </span>
                </span>
              </label>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <div class="checkbox-wrapper-16">
              <label class="checkbox-wrapper">
                <input
                  type="checkbox"
                  class="checkbox-input"
                  value="OpenAI"
                  checked={selectedOption === "OpenAI"}
                  onChange={() => handleCheckboxChange("OpenAI")}
                />
                <span class="checkbox-tile">
                  <span class="checkbox-icon">
                    <RiOpenaiFill />
                  </span>
                  <span class="pricingblock-label">OpenAI Front-End </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-end">
            <div class="checkbox-wrapper-16">
              <label class="checkbox-wrapper">
                <input
                  type="checkbox"
                  class="checkbox-input"
                  value="Electron"
                  checked={selectedOption === "Electron"}
                  onChange={() => handleCheckboxChange("Electron")}
                />
                <span class="checkbox-tile">
                  <span class="checkbox-icon">
                    <IoLogoElectron />
                  </span>
                  <span class="pricingblock-label">
                    Electron With Hot Reload{" "}
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <div class="checkbox-wrapper-16">
              <label class="checkbox-wrapper">
                <input
                  type="checkbox"
                  class="checkbox-input"
                  value="React"
                  checked={selectedOption === "React"}
                  onChange={() => handleCheckboxChange("React")}
                />
                <span class="checkbox-tile">
                  <span class="checkbox-icon">
                    <BiLogoReact />
                  </span>
                  <span class="pricingblock-label">React</span>
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex mt-3 justify-content-center">
              <label className="pricingblock-language-label">
                Pick from two languages
              </label>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="col-1 ">
                {" "}
                <label className="pricingblock-language">Java </label>
              </div>
              <div className="col-1">
                <div className="">
                  {" "}
                  <input
                  className="pricingblock-language-checkbox"
                    type="checkbox"
                    value="Java"
                    checked={selectedOption2 === "Java"}
                    onChange={() => handleCheckboxChange2("Java")}
                  ></input>
                </div>
              </div>
              <div className="col-2">
                <label className="pricingblock-language">Typescript </label>
              </div>
              <div className="col-1">
                {" "}
                <div className="">
              
                  <input
                   className="pricingblock-language-checkbox"
                    type="checkbox"
                    value="Typescript"
                    checked={selectedOption2 === "Typescript"}
                    onChange={() => handleCheckboxChange2("Typescript")}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-4 d-flex justify-content-center">
            <label className="pricingblock-price badge text-bg-success">
              {" "}
              FREE{" "}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-4">
            <input
              className="pricingblock-email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
              type='email'
            ></input>
            <button className="pricingblock-button " onClick={logTemplate}>
           
              {" "}
              <PiToolboxLight /> Get Tool
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center ">
          {errorMessage && <p className="badge text-bg-danger">{errorMessage}</p>}
          {successMessage && <p className='badge text-bg-success'>{successMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

// Chatgpt Front end template
// OpenAI frontent template
// Electron with hot reload template
// React Template

export default PricingBlock;
