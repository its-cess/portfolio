import { Fragment } from "react";

import "./ticket-item.styles.scss";

export default function TicketItem(props) {
  return (
    <Fragment>
      <div className="ticket-container">
        <div className="ticket-item-container">
          <h1 className="ticket-name">{props.title}</h1>
          <div className="comparison-pics-container">
            <div className="before-picture">
              <h5>BEFORE</h5>
              <img
                alt={`${props.title}`}
                src={
                  process.env.PUBLIC_URL +
                  `/images/internship/${props.beforeImage}`
                }
                className="before-image"
              />
            </div>
            <div className="after-picture">
              <h5>AFTER</h5>
              <img
                alt={`${props.title}`}
                src={
                  process.env.PUBLIC_URL +
                  `/images/internship/${props.afterImage}`
                }
                className="after-image"
              />
            </div>
          </div>
          <div className="ticket-description-container">
            {props.description}
          </div>
        </div>
        <div className="metric-container">
          <h4>THE IMPACT</h4>
          {props.metricImage && (
            <img
              alt={`${props.title}`}
              src={
                process.env.PUBLIC_URL +
                `/images/internship/${props.metricImage}`
              }
              className="metric-image"
            />
          )}
          <div className="metric description">{props.impact}</div>
        </div>
      </div>
    </Fragment>
  );
}
