import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import React, { useEffect } from "react";
import anime from 'animejs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/timeline" element={<Timeline/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
