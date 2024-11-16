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
import Footer from './components/Footer/Footer';
import { Element } from 'react-scroll'; // Import Element for scroll targeting

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Element name="home" id="home">
          <Hero />
        </Element>
        <Element name="about" id="about">
          <About />
        </Element>
        <Element name="experience" id="experience">
          <Experience />
        </Element>
        <Element name="skills" id="skills">
          <Skills />
        </Element>
        <Element name="projects" id="projects">
          <Projects />
        </Element>
        <Footer />
      </Router>
    </>
  );
}

export default App;
