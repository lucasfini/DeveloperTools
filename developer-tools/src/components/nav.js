import React from "react";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="nav-section pt-3 pb-3">
      <div className="row ">
        <div className="col-md-12 col-12 d-flex ">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3   d-flex align-items-center justify-content-center justify-content-lg-end justify-content-md-center me-lg-5 p-1 ">
            <a>
              {" "}
              <img
                src={require("../img/img.JPG")}
                className="rounded"
                alt="hah"
                width="35"
                height="35"
              ></img>
              <span className="ms-2 nav-title ">General<span className="nav-title-2">Tooling</span></span>
            </a>
            
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-start">
          <button onClick={() => scrollToSection('pricing')}  className="nav-Button me-5">Pricing</button>
          <button  onClick={() => scrollToSection('faq')} className="nav-Button">FAQ</button>
          </div>
       
        </div>
      </div>

    </section>
  );
};

export default Nav;
