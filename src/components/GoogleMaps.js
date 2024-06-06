import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/GoogleMaps.css";

function GoogleMap() {
  const [coordinates, setCoordinates] = useState(null);

  const config = require("../config.json");
  const googleMapsAPI = config.googleMapAPI;
  const googleMapsAddress = config.googleMapAddress;

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            googleMapsAddress
          )}&key=${googleMapsAPI}`
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
      function initMap() {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: coordinates,
          zoom: 13,
        });

        new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: "Trendi",
        });
      }

      if (window.google) {
        initMap();
      }
    }
  }, [coordinates]);

  return <div id="map" style={{ width: "100%", height: "90%" }}></div>;
}

export default GoogleMap;
