import { Fragment } from "react";

import Header from "../base/Header";

import "./contact.styles.scss";

export default function Contact() {
  return (
    <Fragment>
      <Header
        align="left"
        title="Contact Me"
        subTitle="Open to Junior Front End Developer Positions"
        span="Available to start immediately"
      />
      <h4 className="references">
        References and letter of recommendation available upon request.
      </h4>
      <div className="contact-container">
        <a
          href="https://www.linkedin.com/in/cecilytoro/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/its-cess" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square"></i>
        </a>
        <a
          href="https://twitter.com/its_cess7"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-twitter-square"></i>
        </a>
        <a target="_top" href="mailto:torocecily@gmail.com" rel="noreferrer">
          <i class="fas fa-envelope-square"></i>
        </a>
      </div>
    </Fragment>
  );
}
