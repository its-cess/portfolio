import React from "react";
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import projectData from "./projectData";

export default function App() {

  const projects = projectData.map(item => {
    return <Portfolio
              key={item.id}
              {...item}
           />
  })

  return(
    <main>
      <Hero />
      <div className="project-section">
        {projects}
      </div>
      <Contact />
    </main>
  )
}
