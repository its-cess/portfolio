import "./landing-page.styles.scss";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1 className="banner">Welcome!</h1>
      <p className="introduction">
        I'm Cecily Toro - a junior front end web developer. Thanks for stopping
        by to look at my portfolio! I just finished a 6-month inernship at a
        startup company. You can take a look at the work I did during that
        internship in-depth in the{" "}
        <a href="/experience" className="inline-link">
          Work Experience
        </a>{" "}
        page.
        <br />
        <br />I am currently looking for a junior front-end developer position.
        I am available to start immediately. I have experience working with
        HTML, CSS, JavaScript, and jQuery. I have experience using multiple
        JavaScript frameworks including both Vue.js and React.js. I am
        comfortable using a variety of component libraries including Bootstrap.
        I also use CSS preprocessors like SASS. To see a more complete list of
        technologies, please check out some of my{" "}
        <a href="/projects" className="inline-link">
          projects
        </a>
        .
        <br />
        <br />
        This portfolio was created with React 18, React Router v6, Bootstrap,
        SASS, and CSS animations. If you have any other questions or would like
        to setup an interview, please do not hesitate to{" "}
        <a href="/contact-me" className="inline-link">
          contact me
        </a>
        .
      </p>
    </div>
  );
}
