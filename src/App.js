import React from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="portfolio" element={<LandingPage />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact-me" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}
