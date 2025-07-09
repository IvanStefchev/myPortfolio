import { Link } from "react-router-dom";
import ivanPhoto from "../assets/using-examples.webp"; 

function Home() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 140px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {}
      <img
        src={ivanPhoto}
        alt="Ivan"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "2rem",
          boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
        }}
      />

      {}
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1.25rem",
          color: "#222",
          maxWidth: "800px",
          fontWeight: "600",
        }}
      >
        Hi, I’m Ivan — a dedicated software developer specializing in React and modern web technologies.
      </h1>

      {}
      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          maxWidth: "600px",
          marginBottom: "2rem",
          lineHeight: "1.6",
        }}
      >
        I build intuitive, responsive, and user-friendly web applications that help solve real-world problems and bring ideas to life.
      </p>

      {}
      <Link
        to="/projects"
        style={{
          padding: "0.8rem 1.6rem",
          backgroundColor: "#007acc",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          boxShadow: "0 4px 12px rgba(0,122,204,0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#005fa3";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,95,163,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#007acc";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,122,204,0.3)";
        }}
      >
        See My Projects →
      </Link>
    </div>
  );
}

export default Home;
