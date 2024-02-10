import React, { useState, useEffect } from "react";
import "../styles/Booking.css";

import End from "./End";

// var CLIENT_ID = "588942216255-4nnlem9bsaorpmg28o873uupbl5mr2hq.apps.googleusercontent.com"
// var API_KEY = "AIzaSyCNxEdxzx4-sbxM0vu8-0vFSlne-3-WEKY"
// var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
// var SCOPES = "https://www.googleapis.com/auth/calendar.events"

const Booking = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(true);
  const [content, setContent] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const scriptGoogleApi = document.createElement("script");
    scriptGoogleApi.src = "https://apis.google.com/js/api.js";
    scriptGoogleApi.async = true;
    scriptGoogleApi.defer = true;
    scriptGoogleApi.onload = () =>
      window.gapi.load("client", initializeGapiClient);
    document.body.appendChild(scriptGoogleApi);

    const scriptGisClient = document.createElement("script");
    scriptGisClient.src = "https://accounts.google.com/gsi/client";
    scriptGisClient.async = true;
    scriptGisClient.defer = true;
    scriptGisClient.onload = gisLoaded;
    document.body.appendChild(scriptGisClient);
    if (window.gapi) {
      listUpcomingEvents();
    } else {
      window.addEventListener("gapiLoaded", listUpcomingEvents); 
      return () => window.removeEventListener("gapiLoaded", listUpcomingEvents);
    }

    return () => {
      document.body.removeChild(scriptGoogleApi);
      document.body.removeChild(scriptGisClient);
    };
  }, []);

  const initializeGapiClient = async () => {
    try {
      await window.gapi.client.init({
        apiKey: "AIzaSyCNxEdxzx4-sbxM0vu8-0vFSlne-3-WEKY",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
      });
      setIsAuthorized(true);
    } catch (error) {
      console.error("Initialization error:", error.message);
      console.error(
        "Initialization error details:",
        JSON.stringify(error, null, 2),
      );
    }
  };

  const gisLoaded = () => {
    window.tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id:
        "588942216255-4nnlem9bsaorpmg28o873uupbl5mr2hq.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/calendar.readonly",
      callback: (response) => {
        if (response.error !== undefined) {
          throw response;
        }
        setIsSignedOut(false);

      },
    });
    setIsAuthorized(true);
  };

  const handleAuthClick = () => {
    try {
      window.tokenClient.requestAccessToken({ prompt: "consent" });
    } catch (error) {
      console.error("Auth error:", error.message);
      console.error("Auth error details:", JSON.stringify(error, null, 2));
    }
  };

  const handleSignoutClick = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token, () => {
        console.log("Token revoked");
        window.gapi.client.setToken(null); 
        setIsSignedOut(true);
        setIsAuthorized(false);
        setContent("");
      });
    }
  };

  const listUpcomingEvents = async () => {
    try {
      const request = {
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      };
      const response = await window.gapi.client.calendar.events.list(request);
      const events = response.result.items;
      if (!events || events.length === 0) {
        setContent("No events found.");
        return;
      }

      setEvents(events);


      const formattedEvents = events.reduce(
        (str, event) =>
          `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
        "Events:\n",
      );
      setContent(formattedEvents);
    } catch (err) {
      setContent(err.message);
    }
  };

  return (
    <>
      <div className="booking-container-1">
        <div className="booking-header">Booking</div>
      </div>
      <div className="booking-container-2">
        <div className="log-in-container">
          {isAuthorized && (
            <button
              id="authorize_button"
              onClick={handleAuthClick}
              className="authorize"
            >
              Authorize JS
            </button>
          )}
          {!isSignedOut && (
            <button id="signout_button" className="signout" onClick={handleSignoutClick}>
              Sign Out JS
            </button>
          )}
        </div>
        <div className="events">
          <pre>{content}</pre>{" "}
        </div>
      </div>
      <End />
    </>
  );
};

export default Booking;
