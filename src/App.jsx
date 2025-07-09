import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",       
        minHeight: "100vh",  
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Navbar />

      <main
        style={{
          flexGrow: 1,
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
