function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Ivan Stefchev</h1>
          <p>Developer | Creator | Explorer</p>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="container">
        <h2>About Me</h2>
        <p>
          Hello! I'm Ivan, a passionate developer with a love for creating useful and visually appealing digital products.
          I enjoy learning new technologies and turning ideas into reality.
        </p>
      </section>

      <section id="projects" className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <a href="https://github.com/ivanstefchev/to-do-list" target="_blank" rel="noopener noreferrer">
              <img src="/toDoListLogo.jpg" alt="To Do List Project" />
              <h3>To-Do List App</h3>
              <p>A simple to-do list app built with HTML, CSS, and JavaScript.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="container">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me at: <a href="mailto:ivan@example.com">ivan@example.com</a>
        </p>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Ivan Stefchev</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
