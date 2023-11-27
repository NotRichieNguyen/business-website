import React from "react";
import GoogleMap from "./GoogleMap";
import End from "./End"
import "../styles/Contact.css";
import instagram from "../images/instagram.jpg";
import facebook from "../images/facebook.jpg";
import yelp from "../images/yelp.png";
import pinpoint from "../images/pinpoint.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";

// https://www.instagram.com/trendinailsandfacial/
// https://www.facebook.com/trendinailsfacial
// https://www.yelp.com/biz/trendi-nails-and-facial-bellaire

function Contact() {
  return (
    <div className="container-mt-4">
      {" "}
      {/* Add Bootstrap container class */}
      <h1 className="display-4">Connect with Us</h1>
      <div className="social-media-container">
        <div className="instagram-container">
          <a
            href="https://www.instagram.com/trendinailsandfacial/"
            target="blank"
          >
            <img
              src={instagram}
              alt="instagram"
              className="instagram-icon"
            ></img>
          </a>
        </div>
        <div className="facebook-container">
          <a href="https://www.facebook.com/trendinailsfacial" target="blank">
            <img src={facebook} alt="facebook" className="facebook-icon"></img>
          </a>
        </div>
        <div className="yelp-container">
          <a
            href="https://www.yelp.com/biz/trendi-nails-and-facial-bellaire"
            target="blank"
          >
            <img src={yelp} alt="yelp" className="yelp-icon"></img>
          </a>
        </div>
      </div>
      <div style={{ marginBottom: '12px', fontSize: '20px' }}>
      Always here for your queries. Book with a call. Your feedback is valued; email us anytime!
</div>

      <div className="contact-info-container">
        <div className="contact-info-container-left">
          <div className="contact-info-container-left-1">Contact Us</div>
          <div className="contact-info-container-left-2">
            <img className="pinpoint" src={pinpoint} alt="pinpoint"></img>
            5427 Bellaire Blvd Suite A Bellaire, TX 77401
          </div>
          <div className="contact-info-container-left-3">
          <img className="phone" src={phone} alt="phone"></img>
            713-828-5110
            </div>
          <div className="contact-info-container-left-4">
          <img className="mail" src={mail} alt="mail"></img>
            trendinailsfacial@gmail.com
          </div>
        </div>
        <div className="contact-info-container-right">
          <div className="contact-info-container-right-1">Open Hours</div>
          <div className="contact-info-container-right-2">Mon - Sat: 9:30 AM - 7:00 PM</div>
          <div className="contact-info-container-right-3">Sunday: 11:00 AM - 6:00 PM</div>
        </div>
      </div>
      <div className="map">
        <GoogleMap />
      </div>
      <div className="end">
        <End />
      </div>
    </div>
  );
}

export default Contact;
