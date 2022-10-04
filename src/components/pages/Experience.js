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
        Wethos is.... Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
        sed pulvinar proin gravida hendrerit lectus. Dignissim cras tincidunt
        lobortis feugiat vivamus.
      </h5>
      <div className="ticket-section">{tickets}</div>
    </Fragment>
  );
}
