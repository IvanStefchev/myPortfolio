function Footer() {
  return (
    <footer style={{
      marginTop: "40px",
      padding: "20px 0",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      textAlign: "center",
      fontSize: "14px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <p>© {new Date().getFullYear()} Ivan Stefchev. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
