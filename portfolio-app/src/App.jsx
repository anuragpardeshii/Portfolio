import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<About />} />
        </Routes>
        <About />
        <Experience />
        <Skills/>
        <Projects/>
      </Router>
    </>
  );
}

export default App;
