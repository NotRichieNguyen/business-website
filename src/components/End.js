import React from "react";
import "../styles/End.css";
import Logo from "../images/business.png";
import GoogleMap from "./GoogleMaps";

function End() {
  const config = require("../config.json");
  const phone = process.env.REACT_APP_phone;
  const address = process.env.REACT_APP_googleMapAddress;
  const email = process.env.REACT_APP_email;
  const weekday = process.env.REACT_APP_weekday_hours;
  const weekend = process.env.REACT_APP_weekend_hours;

  return (
    <div className="end-container">
      <div className="end-top">
        <div className="end-top-1">
          <div className="end-top-1-line1">
            <img src={Logo} className="logo" alt="business Logo" />
          </div>
          <div className="end-top-1-line2">Elegance at Your Fingertips.</div>
          <div className="end-top-1-line3">{phone}</div>
          <div className="end-top-1-line4">{email}</div>
          <div className="end-top-1-line5">{address}</div>
          <div className="end-top-1-line6"></div>
        </div>
        <div className="end-top-2">
          <div className="end-top-2-line1">WORKING HOURS</div>
          <div className="end-top-2-line2">{weekday}</div>
          <div className="end-top-2-line3">{weekend}</div>
        </div>
        <div className="end-top-3">
          <div className="end-top-3-line1">CONTACT US</div>
          <div className="end-top-3-line2">
            <GoogleMap />
          </div>
        </div>
      </div>
      <div className="end-bottom">
        {process.env.REACT_APP_title} - {process.env.REACT_APP_short_title}
        @2024. All Rights Reserved - Designed by Richie N.
      </div>
    </div>
  );
}

export default End;
