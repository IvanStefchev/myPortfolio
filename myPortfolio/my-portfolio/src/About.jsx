function About() {
  return (
    <section className="container">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Ivan Stefchev, a developer with a passion for building simple and effective web applications.
            I enjoy working with modern tools and frameworks to bring ideas to life.
          </p>
          <p>
            My interests include front-end development, UI/UX design, and learning new technologies that help improve the web experience.
          </p>
        </div>
        <div className="about-img">
          <img
            src="/toDoListLogo-removebg-preview.png"
            alt="Ivan Stefchev"
            style={{ maxWidth: "300px", borderRadius: "12px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
