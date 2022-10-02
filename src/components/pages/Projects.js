import projectData from "../../../src/projectData";

import ProjectItem from "../ProjectItem";

export default function Projects() {
  const projects = projectData.map((item) => {
    return <ProjectItem key={item.id} {...item} />;
  });

  return <div className="project-section">{projects}</div>;
}
