import React from "react";

const About_Box = (props) => {
  const { img, title, body, number } = props;
  return (
 
  
        <div className="about-box">
          <div className="row ">
            <div className="col-3 pt-1 d-flex justify-content-center align-items-center ">
              <div className="row ">
                <center>
                <div className={`col-12 d-flex align-items-center justify-content-center flex-row icon-box-${number} `}>
                  <span className="d-flex align-items-center flex-row  ">{img}</span>
                </div>
                </center>
              </div>
            </div>
            <div className="col-9 p-0  ">
              <div className="row">
                <div className="col-12  ">
                  <label className="about-desc ">
                    <span className="about-number">{number}.</span> {title}
                  </label>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-12 d-flex justify-content-start p-0  ">
                  <span className="about-d">{body}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
 
 
  );
};

export default About_Box;
