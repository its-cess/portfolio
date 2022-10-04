import { Fragment } from "react";
import ticketData from "../../ticketData";

import Header from "../base/Header";
import TicketItem from "../items/TicketItem";

import "./experience.styles.scss";

export default function Experience() {
  const tickets = ticketData.map((item) => {
    return <TicketItem key={item.id} {...item} />;
  });
  return (
    <Fragment>
      <Header
        align="center"
        title="Work Experience"
        subTitle="Front End Developer Internship, Wethos"
        span="March 2022 - September 2022"
      />
      <h5 className="wethos-description">
        Wethos is an all-in-one platform that helps freelancers conduct and grow
        their business. The peer-sourced template library allows users to see
        what others are charging for services, allowing them to confidently
        price their work. They can create a project, build a project proposal,
        send invoices to clients, and get paid all from one place.
      </h5>
      <div className="ticket-section">{tickets}</div>
    </Fragment>
  );
}
