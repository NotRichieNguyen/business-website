import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar"; // Make sure the import matches your file name
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "../src/App.css";

function App() {
  return (
    <Router>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;
