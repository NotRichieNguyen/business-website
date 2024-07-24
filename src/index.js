import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// Function to load Google Maps script
function loadGoogleMapsScript(apiKey) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

function Main() {
  React.useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY_4;
    if (apiKey) {
      loadGoogleMapsScript(apiKey);
    } else {
      console.error("Google Maps API key is not defined in index.js");
    }
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
