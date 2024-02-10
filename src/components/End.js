import React from 'react';
import "../styles/End.css";
import trendiLogo from "../images/trendi.png";
import GoogleMap from './GoogleMaps';

function End() {
return (
  <div className="end-container">
    <div className="end-top">
      <div className="end-top-1">
        <div className="end-top-1-line1"><img src={trendiLogo} className="logo" alt="Trendi Logo" /></div>
        <div className="end-top-1-line2">Elegance at Your Fingertips.</div>
        <div className="end-top-1-line3">(713) 828-5110</div>
        <div className="end-top-1-line4">trendinailsfacial@gmail.com</div>
        <div className="end-top-1-line5">5427 Bellaire Blvd Suite A</div>
        <div className="end-top-1-line6">Houston, TX 77401</div>

      </div>
      <div className="end-top-2">
        <div className="end-top-2-line1">WORKING HOURS</div>
        <div className="end-top-2-line2">Monday - Saturday: 9:30am - 7:00pm</div>
        <div className="end-top-2-line3">Sunday: 11:00am - 6:00pm</div>
      </div>
      <div className="end-top-3">
        <div className="end-top-3-line1">CONTACT US</div>
        <div className="end-top-3-line2"><GoogleMap /></div>
        </div>
    </div>
    <div className="end-bottom">Trendi Nails & Facial - Trendi@2023. All Rights Reserved - Designed by Richie N.</div>
  </div>

);
}

export default End;
