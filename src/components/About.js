import React from "react";
import "../styles/About.css";
import End from "./End";
import aboutpic1 from "../images/about-pic1.jpg";
import aboutpic2 from "../images/about-pic2.jpg";
import aboutpic3 from "../images/polish3.jpg";

function About() {
  return (
    <div className="ultimate-root">
      <div className="container-1">
        <div className="about-us">About Us</div>
      </div>
      <div className="container-2">
        <div className="about-left-container">
          <div className="about-left-header">
            <h1>Your Go-To Spot for Nails</h1>
          </div>
          <div className="left-divider-container">
            <hr className="left-divider" />
          </div>
          <div className="about-description">
            <p>
              Trendi Nails & Facial welcomes you to a place where beauty and
              elegance are redefined with every manicure and pedicure. In
              Houston's busy streets, we stand out as a premium nail salon that
              combines modern and traditional techniques. Our licensed
              technicians are not just skilled; they're artistswho ensure that
              your nail service is a memorable experience.
            </p>
            <p>
              We take pride in our sterile environment and high-quality products
              to guarantee the safety and longevity of your nails.
            </p>
            <p>
              Discover your nails' potential ~ your seat awaits at Trendi Nails!
            </p>
          </div>
        </div>
        <div className="about-root">
          <div className="about-right-container">
            <div className="about-pic1-container">
              <img src={aboutpic1} alt="pic1" className="about-pic1" />
              
            </div>
            <div className="about-pic2-container">
              <img src={aboutpic2} alt="pic2" className="about-pic2" />
            </div>
          </div>
          <div className="about-pic3-container">
              <img src={aboutpic3} alt="pic3" className="about-pic3" />
          </div>
        </div>
      </div>
      <End />
    </div>
  );
}

export default About;
