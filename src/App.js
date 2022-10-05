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
      <Routes basename="portfolio">
        <Route path="portfolio" element={<LandingPage />} />
        <Route path="portfolio/about-me" element={<AboutMe />} />
        <Route path="portfolio/experience" element={<Experience />} />
        <Route path="portfolio/projects" element={<Projects />} />
        <Route path="portfolio/contact-me" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}
