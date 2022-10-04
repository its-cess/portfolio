import { Fragment } from "react";

import "./ticket-item.styles.scss";

export default function TicketItem(props) {
  return (
    <Fragment>
      <div className="ticket-container">
        <div className="ticket-item-container">
          {/* Description container */}
          <div className="ticket-description-container">
            <h1 className="ticket-name">{props.title}</h1>
            {props.description}
          </div>
          {/* Pictures Ccontainer */}
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
        </div>
        {/* Metrics container  */}
        <div className="metric-container">
          <h4>THE IMPACT</h4>
          <div className="metric-description">{props.impact}</div>
        </div>
      </div>
    </Fragment>
  );
}
