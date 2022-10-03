import { Fragment } from "react";
import projectData from "../../../src/projectData";

import Header from "../base/Header";
import ProjectItem from "../../components/items/ProjectItem";

export default function Projects() {
  const projects = projectData.map((item) => {
    return <ProjectItem key={item.id} {...item} />;
  });

  return (
    <Fragment>
      <Header
        align="center"
        title="Work Examples"
        subTitle="Personal Projects"
        span="Made with a variety of technologies"
      />
      <div className="project-section">{projects}</div>
    </Fragment>
  );
}
