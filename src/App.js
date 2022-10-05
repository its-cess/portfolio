import React from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import LandingPage from "./components/pages/LandingPage";
import AboutMe from "./components/pages/AboutMe";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

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
