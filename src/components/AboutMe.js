export default function AboutMe() {
  return (
    <div className="hero-container">
      <h1 className="name-title">Cecily Toro</h1>
      <div className="float-container">
        {/* <img
          alt="portrait"
          className="portrait"
          src={process.env.PUBLIC_URL + "/images/bw.jpg"}
        /> */}
        <p className="hero-description">
          I'm a military veteran and after spending ten years in the medical
          field, I taught myself web development. Naturally creative, I have a
          passion for frontend web development creating clean, beautiful, and
          responsive webpages. You can see samples of my work by clicking on the
          screenshots below. This portfolio was created using React.js.{"\n"}
          <br />
          Currently, I am working as a frontend developer intern at a startup
          company using Vue.js. Some of my responsibilities include fixing bugs,
          improving UI designs, adding new features/functionality to existing
          components, creating unit tests using Jest and Vue Test Utils, using
          Git and GitFlow, and creating/reviewing pull requests.
        </p>
      </div>
    </div>
  );
}
