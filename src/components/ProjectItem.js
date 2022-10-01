import React from "react";

export default function ProjectItem(props) {
  return (
    <div className="project-item">
      <h1 className="project-name">{props.title}</h1>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          alt={`${props.title}`}
          src={process.env.PUBLIC_URL + `/images/${props.image}`}
          className="thumbnail"
        />
      </a>
      <p className="project-description">{props.description}</p>
      <p>
        Created using: <span>{props.using}</span>
      </p>
    </div>
  );
}
