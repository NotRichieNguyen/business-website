import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/GoogleMaps.css";

const googleMapsAddress = process.env.REACT_APP_googleMapAddress;
const googleMapAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY_4;

function GoogleMap() {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            googleMapsAddress
          )}&key=${googleMapAPI}`
        );

        if (response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    }

    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      window.initMap = function () {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: coordinates,
          zoom: 13,
        });

        new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: process.env.REACT_APP_short_title,
        });
      };

      if (window.google && window.google.maps) {
        window.initMap();
      }
    }
  }, [coordinates]);

  console.clear();

  return <div id="map" style={{ width: "100%", height: "90%" }}></div>;
}

export default GoogleMap;
