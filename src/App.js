import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {/* Add 
                more routes as needed */}
            </Routes>
      </div>
    </Router>
  );
}

export default App;
