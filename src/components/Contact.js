import React from "react";
import "../styles/Contact.css";
import End from "./End";
import GoogleMap from "./GoogleMaps";
import facebook from "../images/facebook.jpg";
import yelp from "../images/yelp.png";
import instagram from "../images/instagram.jpg";

function Contact() {
  const config = require("../config.json");
  const phone = process.env.REACT_APP_phone;
  const address = process.env.REACT_APP_googleMapAddress;
  const email = process.env.REACT_APP_email;
  const facebookLink = process.env.REACT_APP_facebook;
  const yelpLink = process.env.REACT_APP_yelp;
  const instagramLink = process.env.REACT_APP_instagram;

  return (
    <div className="contact-root">
      <div className="contact-container-1">
        <div className="contact">Contact</div>
      </div>
      <div className="contact-container-2">
        <div className="contact-us">
          Contact Us
          <div className="contact-divider-container">
            <hr className="contact-divider" />
          </div>
          <div className="contact-top">
            <div className="phone-container">
              <div className="phone-top">
                <h6>PHONE</h6>
              </div>
              <div className="phone-bot">{phone}</div>
            </div>
            <div className="address-container">
              <div className="address-top">
                <h6>ADDRESS</h6>
              </div>
              <div className="address-bot">{address}</div>
            </div>
          </div>
          <div className="contact-bot">
            <div className="email-container">
              <div className="email-top">
                <h6>EMAIL</h6>
              </div>
              <div className="email-bot">{email}</div>
            </div>
            <div className="media-container">
              <div className="media-top">
                <h6>FOLLOW US!</h6>
              </div>
              <div className="media-bot">
                <a href={facebookLink} target="blank">
                  <img
                    src={facebook}
                    className="facebook-icon"
                    alt="facebook"
                  />
                </a>
                <a href={yelpLink} target="blank">
                  <img src={yelp} className="yelp-icon" alt="yelp" />
                </a>
                <a href={instagramLink} target="blank">
                  <img
                    src={instagram}
                    className="instagram-icon"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <GoogleMap />
      </div>
      <End />
    </div>
  );
}

export default Contact;
