import { Fragment } from "react";

import Header from "../base/Header";

import "./about-me.styles.scss";

export default function AboutMe() {
  return (
    <Fragment>
      <Header
        align="left"
        title="About Me"
        subTitle="Cecily Toro"
        span="Junior Front End Web Developer"
      />
      <p className="about-me-container">
        I served in the military from 2012-2015, where I was trained as a
        medical laboratory technician. After separating from the military, I
        continued to work as a laboratory technician until October 2021 when I
        decided to switch careers into web development.
        <br />
        <br />
        I worked everyday teaching myself to code. I learned HTML, CSS,
        JavaScript, jQuery, SASS, and JavaScript frameworks including both Vue
        and React. I also learned how to use Bootstrap, which prepared me for
        using other component libraries. Another important skill I learned was
        version control using Git and GitHub. After 5 months of learning
        full-time, I landed my first web developmet position as an intern with a
        startup company, Wethos.
        <br />
        <br />
        During my internship, I built upon the skills I already had, improving
        them immensely. I gained a deeper knowledge of Vue.js, JavaScript, the
        use of REST APIs, and SASS. I also learned how to work as part of a
        development team, which includes being able to jump into exisiting code
        and figure out what it is doing. I was able to add to my existing
        knowledge of Git and version control by creating new branches, creating
        pull requests, and merging branches. I also learned about version
        control using GitFlow. Part of working in a team also meant working
        closely with designers to turn Figma and Whimsical files into
        pixel-perfect web pages. I also had my first experience with unit
        testing. I created new unit tests using Jest and Vue Test Utils for
        multiple components, helping to increase the confidence in our site. We
        were a small team that pushed new features into production weekly, so
        effective communication and meeting deadlines was critical. Some of the
        work I did included bug fixes, updating the UI, optimizing performance,
        creating unit tests, adding Storybook stories for components, and even
        completing a new feature. To see more in-depth about the work I
        completed during my internship, please visit the{" "}
        <a href="/experience" class="inline-link">
          Work Experience
        </a>{" "}
        page.
        <br />
        <br />I have found my passion in web development, and love to learn new
        things. I am constantly looking to better my skills or learn new ones.
        There is always something new to learn in web development, which is one
        of the things I love about it. I am naturally creative, with an eye for
        detail, and love buildings things. I am a quick learner, but most
        importantly I am hardworking. I will do what it takes to learn the
        skills necessary for any position. I am a dependable team player and
        believe I would make a great addition to any development team.
      </p>
    </Fragment>
  );
}
