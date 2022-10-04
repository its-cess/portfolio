import { Fragment } from "react";

import Button from "react-bootstrap/Button";

import "./project-item.styles.scss";

export default function ProjectItem(props) {
  return (
    <Fragment>
      <div className="project-item-container">
        <div className="image-title-container">
          <h1 className="project-name">{props.title}</h1>
          <img
            alt={`${props.title}`}
            src={process.env.PUBLIC_URL + `/images/${props.image}`}
            className="thumbnail"
          />
        </div>
        <div className="description-container">
          <p className="project-description">{props.description}</p>
          <p>
            <span>{props.using}</span>
          </p>
          <Button
            variant="secondary"
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit Page
          </Button>
          {props.repo && (
            <Button
              variant="outline-secondary"
              href={props.repo}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </Button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
