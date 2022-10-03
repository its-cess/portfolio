import { Fragment } from "react";

import Header from "../base/Header";

import "./contact.styles.scss";

export default function Contact() {
  return (
    <Fragment>
      <Header
        title="Contact Me"
        subTitle="Open to Junior Front End Developer Positions"
        span="Available to start immediately"
      />
      <div className="contact-container">
        <a
          href="https://www.linkedin.com/in/cecilytoro/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin fa-5x"></i>
        </a>
        <a href="https://github.com/its-cess" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square fa-5x"></i>
        </a>
        <a target="_top" href="mailto:torocecily@gmail.com" rel="noreferrer">
          <i class="fas fa-envelope-square fa-5x"></i>
        </a>
      </div>
    </Fragment>
  );
}
