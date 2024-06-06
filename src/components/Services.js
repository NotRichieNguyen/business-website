import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Services.css";
import End from "./End";

function Services() {
  const [manicureItems, setManicureItems] = useState([]);
  const [pedicureItems, setPedicureItems] = useState([]);
  const [response3Items, setResponse3Items] = useState([]);
  const [response4Items, setResponse4Items] = useState([]);
  const [response5Items, setResponse5Items] = useState([]);
  const [response6Items, setResponse6Items] = useState([]);
  const [response7Items, setResponse7Items] = useState([]);
  const [response8Items, setResponse8Items] = useState([]);
  const [response9Items, setResponse9Items] = useState([]);

  const config = require("../config.json");
  const SHEET_ID = config.googleSheetsSHEETID;
  const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/MANICURES?key=${API_KEY}`
        );
        const rows1 = response1.data.values;
        const items1 = rows1.slice(1).map((row) => ({
          name: row[0],
          duration: row[1],
          price: row[2],
          description: row[3],
        }));
        setManicureItems(items1);

        const response2 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/PEDICURES?key=${API_KEY}`
        );
        const rows2 = response2.data.values;
        const items2 = rows2.slice(1).map((row) => ({
          name: row[0],
          duration: row[1],
          price: row[2],
          description: row[3],
        }));
        setPedicureItems(items2);

        const response3 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/POWDER?key=${API_KEY}`
        );
        const rows3 = response3.data.values;
        const items3 = rows3.slice(1).map((row) => ({
          name: row[0],
          duration: row[1],
          price: row[2],
          description: row[3],
        }));
        setResponse3Items(items3);

        const response4 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/ADDON?key=${API_KEY}`
        );
        const rows4 = response4.data.values;
        const items4 = rows4.slice(1).map((row) => ({
          name: row[0],
          price: row[1],
        }));
        setResponse4Items(items4);

        const response5 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/WAX?key=${API_KEY}`
        );
        const rows5 = response5.data.values;
        const items5 = rows5.slice(1).map((row) => ({
          name: row[0],
          price: row[1],
        }));
        setResponse5Items(items5);

        const response6 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/POLISHCHANGE?key=${API_KEY}`
        );
        const rows6 = response6.data.values;
        const items6 = rows6.slice(1).map((row) => ({
          name: row[0],
          price: row[1],
        }));
        setResponse6Items(items6);

        const response7 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/OTHER?key=${API_KEY}`
        );
        const rows7 = response7.data.values;
        const items7 = rows7.slice(1).map((row) => ({
          name: row[0],
          price: row[1],
        }));
        setResponse7Items(items7);

        const response8 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/FACIAL?key=${API_KEY}`
        );
        const rows8 = response8.data.values;
        const items8 = rows8.slice(1).map((row) => ({
          name: row[0],
          duration: row[1],
          price: row[2],
        }));
        setResponse8Items(items8);

        const response9 = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/EXTRA?key=${API_KEY}`
        );
        const rows9 = response9.data.values;
        const items9 = rows9.slice(1).map((row) => ({
          price: row[0],
          description: row[1],
        }));
        setResponse9Items(items9);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="services-root">
      <div className="services-container">
        <div className="services">Services</div>
      </div>
      <div className="services-container-2">
        <div className="service-header">
          <h1>NATURAL NAIL MANICURES</h1>
        </div>
        <div className="services-list">
          {manicureItems.map((item, index) => (
            <div className="service" key={`manicure-${index}`}>
              <div className="service-top">
                <div className="service-name">
                  {item.name}{" "}
                  <span className="service-duration">({item.duration})</span>
                </div>
                <div className="service-price">{item.price}</div>
              </div>
              <div className="service-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-container-3">
        <div className="service-header">
          <h1>NATURAL NAIL PEDICURES</h1>
        </div>
        <div className="services-list">
          {pedicureItems.map((item, index) => (
            <div className="service" key={`pedicure-${index}`}>
              <div className="service-top">
                <div className="service-name">
                  {item.name}{" "}
                  <span className="service-duration">({item.duration})</span>
                </div>
                <div className="service-price">{item.price}</div>
              </div>
              <div className="service-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-container-4">
        <div className="service-header">
          <h1>NAIL SERVICES</h1>
        </div>
        <div className="services-list">
          {response3Items.map((item, index) => (
            <div className="service">
              <div className="service-top">
                <div className="service-name">
                  {item.name}
                  <span className="service-duration"></span>
                </div>
                <div className="service-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
        {response9Items.map((item, index) => (
          <div>
            <div style={{ marginBottom: "10px" }}>
              **Add {item.price} {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="services-container-5">
        <div className="service-header">
          <h1>ADD - ONS / CHILDREN</h1> <h6>(Under 10 yrs)</h6>
        </div>
        <div className="services-list">
          {response4Items.map((item, index) => (
            <div className="service">
              <div className="service-top">
                <div className="service-name">{item.name}</div>
                <div className="service-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-container-6">
        <div className="service-header">
          <h1>WAXING</h1>
        </div>
        <div className="services-list">
          {response5Items.map((item, index) => (
            <div className="service">
              <div className="service-top">
                <div className="service-name">{item.name}</div>
                <div className="service-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-container-7">
        <div className="service-header">
          <h1>POLISH CHANGE SERVICES</h1>
        </div>
        <div className="services-list">
          {response6Items.map((item, index) => (
            <div className="service">
              <div className="service-top">
                <div className="service-name">{item.name}</div>
                <div className="service-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-container-8">
        <div className="service-header">
          <h1>OTHER SERVICES</h1>
        </div>
        <div className="services-list">
          {response7Items.map((item, index) => (
            <div className="service">
              <div className="service-top">
                <div className="service-name">{item.name}</div>
                <div className="service-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-container-9">
        <div className="service-header">
          <h1>FACIAL & MASSAGE SERVICES</h1>
        </div>
        <div className="services-list">
          {response8Items.map((item, index) => (
            <div className="service">
              <div className="service-top">
                <div className="service-name">
                  {item.name}{" "}
                  <span className="service-duration">({item.duration})</span>
                </div>
                <div className="service-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <End />
    </div>
  );
}

export default Services;
