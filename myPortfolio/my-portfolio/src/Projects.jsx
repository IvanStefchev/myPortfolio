function Projects() {
  return (
    <>
      <header>
        <div className="container">
          <h1>My Projects</h1>
          <p>A deeper look at what I've built</p>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About me</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <main className="container">
        <section className="project-grid">
          <div className="project-card">
            <img src="/toDoListLogo.jpg" alt="To Do List App" />
            <h2>To-Do List App</h2>
            <p>A simple to-do list application using HTML, CSS, and JavaScript.</p>
            <a href="https://github.com/ivanstefchev/to-do-list" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>

          {/* Можеш да добавиш още проекти по този модел */}
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Ivan Stefchev</p>
        </div>
      </footer>
    </>
  );
}

export default Projects;
