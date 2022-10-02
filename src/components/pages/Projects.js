import { Fragment } from "react";
import projectData from "../../../src/projectData";

import Header from "../base/Header";
import ProjectItem from "../ProjectItem";

export default function Projects() {
  const projects = projectData.map((item) => {
    return <ProjectItem key={item.id} {...item} />;
  });

  return (
    <Fragment>
      <Header title="Projects" subTitle="Testing the subtitle" />
      <div className="project-section">{projects}</div>
    </Fragment>
  );
}
