import ivanPhoto1 from '../assets/project1.jpg.png';
import ivanPhoto2 from '../assets/project2.jpg.png';
import ivanPhoto3 from '../assets/project3.jpg.webp';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Team Project",
      description: "A collaborative platform for managing team tasks.",
      imageUrl: ivanPhoto2,
      link: "https://github.com/yourusername/team-project",
    },
    {
      id: 2,
      title: "To Do App",
      description: "A simple and user-friendly task manager app designed to help you organize your daily tasks.",
      imageUrl: ivanPhoto1,
      link: "https://ivanstefchev.github.io/myToDoApp/",
    },
    {
      id: 3,
      title: "Flash Cards",
      description: "Study flashcards with spaced repetition technique.",
      imageUrl: ivanPhoto3,
      link: "https://ivanstefchev.github.io/FlashCards/",
    },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2.5rem" }}>
        My Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map(({ id, title, description, imageUrl, link }) => (
          <div
            key={id}
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s ease",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                padding: "20px",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2 style={{ marginBottom: "10px", fontSize: "20px" }}>{title}</h2>
              <p style={{ marginBottom: "15px", fontSize: "16px" }}>{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#005fa3",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
