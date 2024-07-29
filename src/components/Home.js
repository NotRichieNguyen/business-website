import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import trendiLogo from "../images/trendi.png";
import trendiOut from "../images/trendioutside.png";
import mani from "../images/mani.png";
import pedi from "../images/pedi.png";
import wax from "../images/wax.png";
import etc from "../images/etc.png";
import essie2 from "../images/opi2.png";
import dnd from "../images/dnd.png";
import opi from "../images/opi.png";
import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import polish from "../images/polish.png";
import End from "./End";
import { NavLink } from "react-router-dom";

function Home() {
  const [promoItems, setPromoItems] = useState([]);

  const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEETS_SHEET_ID;
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY_4;
  console.log("HOME:", API_KEY);
  //275620889275-npqk7jv63cuqn5f8gmbsasv26n97m133.apps.googleusercontent.com

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the first sheet (manicures)
        const response1 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/PROMO?key=${API_KEY}`
        );
        const rows1 = response1.data.values;
        const items1 = rows1.slice(1).map((row) => ({
          discount: row[0],
          service: row[1],
          apply: row[2],
        }));
        setPromoItems(items1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="full-background">
        <div className="content">
          <div className="logo-container">
            <img src={trendiLogo} className="logo" alt="Trendi Logo" />
          </div>
          <div className="header">
            <div className="header-line1">Polish Your Presence</div>
            <div className="header-line2">One Nail at a Time</div>
            <hr className="header-divider" />
            <NavLink className="header-button" to="/contact">
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="two-container">
        <div className="left-container">
          <img
            src={trendiOut}
            className="outside-image"
            alt="Outside view of salon"
          />
        </div>
        <div className="right-container">
          <h2
            style={{
              lineHeight: "1.2em",
              fontWeight: 400,
              letterSpacing: "0",
              fontFamily: "Lustria, serif",
              color: "#dea43e",
            }}
          >
            Trendi Nails & Facial - Your Destination for Elite Nail and Beauty
            Care
          </h2>
          <p></p>
          <p></p>

          <p>
            At our salons, we provide top-tier beauty services designed to
            enhance your natural charm.
          </p>
          <p>
            Our expert technicians are committed to ongoing training,
            guaranteeing unparalleled service at every appointment. We select
            only premium products to craft the style you envision.
          </p>
          <p>
            Embrace the cutting edge of nail design with our extensive selection
            of over 5000 polish and powder hues, and experience pedicures that
            blend relaxation with beauty benefits. Leave our salon feeling
            rejuvenated and looking your absolute best.
          </p>
        </div>
      </div>
      <div className="three-container">
        <div className="title3">Our Services</div>
        <div className="home-services-container">
          <div className="manicure" id="manicure">
            <div className="manicure-icon">
              <img src={mani} alt="mani" className="mani-icon" />
            </div>
            <div className="manicure-title">MANICURE</div>
            <div className="manicure-description">
              Begin with a trimming, filing, and shaping of your nails, followed
              by cuticle care to neaten the nail beds. A relaxing hand massage
              precedes the final flourish: a nail polish application in your
              preferred hue.
            </div>
          </div>
          <div className="pedicure" id="pedicure">
            <div className="pedicure-icon">
              <img src={pedi} alt="pedi" className="pedi-icon" />
            </div>
            <div className="pedicure-title">PEDICURE</div>
            <div className="pedicure-description">
              Experience a full-service pedicure starting with nail shaping and
              meticulous cuticle attention, complemented by a hydrating massage
              for feet and calves. Rough skin is smoothed away with a
              one-time-use foot file, all concluded with a polish in the shade
              you desire and a quick-set top coat for longevity.
            </div>
          </div>
          <div className="wax" id="wax">
            <div className="wax-icon">
              <img src={wax} alt="wax" className="wax2-icon" />
            </div>
            <div className="wax-title">WAX</div>
            <div className="wax-description">
              The waxing treatment involves applying a specially formulated
              sticky substance to the skin that grips unwanted hair. This method
              ensures hair is pulled from the root when the wax is removed,
              resulting in a smoother finish.
            </div>
          </div>
          <div className="etc" id="etc">
            <div className="etc-icon">
              <img src={etc} alt="etc" className="etc2-icon" />
            </div>
            <div className="etc-title">ETC</div>
            <div className="etc-description">
              Nails are a reflection of personal style, much like skin and hair.
              Embrace the exploration of various nail enhancements to discover
              the perfect match that complements your unique lifestyle and
              preferences.
            </div>
          </div>
        </div>
      </div>
      <div className="four-container">
        <div className="polish-brands">
          <div className="dnd-container">
            <img className="dnd-logo" src={dnd} alt="dnd" />
          </div>
          <div className="opi-container">
            <img className="opi-logo" src={opi} alt="opi" />
          </div>
          <div className="essie-container">
            <img className="essie-logo" src={essie2} alt="essie" />
          </div>
        </div>
      </div>
      <div className="five-container">
        <div className="home-gallery-container">
          <div className="g1-container">
            <img src={g1} alt="g1" className="g1" />
          </div>
          <div className="g2-container">
            <img src={g2} alt="g2" className="g2" />
          </div>
          <div className="g3-container">
            <img src={g3} alt="g3" className="g3" />
          </div>
          <div className="g4-container">
            <img src={g4} alt="g4" className="g4" />
          </div>
          <div className="g5-container">
            <img src={g5} alt="g5" className="g5" />
          </div>
        </div>
      </div>
      <div className="six-container">
        <div className="six-left-container">
          <img src={polish} alt="polish" className="polish" />
        </div>
        <div className="six-right-container">
          <div className="six-header">PROMOTIONS</div>

          <div className="six-divider">
            <hr className="header-six-divider" />
          </div>
          {promoItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="six-promo1">
                <strong>{item.discount}</strong> &nbsp;
                <em>({item.service})</em>
              </div>
              <div className="promo1-date">{item.apply}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <End />
    </>
  );
}

export default Home;
