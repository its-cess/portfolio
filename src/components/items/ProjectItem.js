import { Fragment } from "react";

import "./project-item.styles.scss";

export default function ProjectItem(props) {
  return (
    <Fragment>
      <div className="project-item-container">
        <div className="image-title-container">
          <h1 className="project-name">{props.title}</h1>
          <a href={props.url} target="_blank" rel="noreferrer">
            <img
              alt={`${props.title}`}
              src={process.env.PUBLIC_URL + `/images/${props.image}`}
              className="thumbnail"
            />
          </a>
        </div>
        <div className="description-container">
          <p className="project-description">{props.description}</p>
          <p>
            <span>{props.using}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
