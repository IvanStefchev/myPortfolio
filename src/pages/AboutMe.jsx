import ivanPhoto from '../assets/avatar.jpg';

function About() {
  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      padding: "60px 20px",
      fontFamily: "Segoe UI, sans-serif",
      color: "#2c3e50",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)"
    }}>
      
      
      <div style={{ flex: "1 1 500px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#1a1a1a" }}>About Me</h1>
        
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
          Hello! My name is <strong>Ivan</strong>, a passionate front-end developer focused on building interactive and user-friendly websites using <strong>React</strong>, <strong>Vite</strong>, and modern JavaScript tools.
        </p>
        
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "24px" }}>
          I'm a creative problem solver with a strong attention to detail. I enjoy working on clean, responsive designs that adapt beautifully across devices. Outside of coding, I love football, sketching ideas, and exploring technology.
        </p>

        <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>💼 Skills</h2>
        <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "17px", lineHeight: "1.8" }}>
          <li>⚛️ React & Vite</li>
          <li>🧱 Semantic HTML5</li>
          <li>🎨 Modern CSS (Flexbox, Grid, Animations)</li>
          <li>📜 JavaScript (ES6+)</li>
          <li>🐙 Git & GitHub</li>
          <li>📱 Responsive & Mobile-first Design</li>
        </ul>
      </div>

      {}
      <div style={{ flex: "0 0 250px", textAlign: "center" }}>
        <img
  src={ivanPhoto}
  alt="Ivan's profile"
  style={{
    borderRadius: "12px",
    width: "100%",
    height: "auto",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  }}
/>

      </div>
    </div>
  );
}

export default About;