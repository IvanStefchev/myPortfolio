import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#eee",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "1.6rem",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Ivan's Portfolio
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {links.map(({ path, label }, index) => {
          const isHovered = hovered === index;
          return (
            <Link
              key={path}
              to={path}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                textDecoration: "none",
                color: "#333",
                position: "relative",
                paddingBottom: "4px",
                fontWeight: "500",
                transition: "color 0.3s ease",
                color: isHovered ? "#007acc" : "#333",
              }}
            >
              {label}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "3px",
                  width: isHovered ? "100%" : "0",
                  backgroundColor: "#007acc",
                  borderRadius: "3px",
                  transition: "width 0.3s ease",
                }}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
