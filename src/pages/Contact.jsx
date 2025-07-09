import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", form);
      setForm({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      color: "#2c3e50"
    }}>
      <h1 style={{ marginBottom: "20px", color: "#1a1a1a" }}>Contact Me</h1>

      {submitted && (
        <div style={{ marginBottom: "20px", color: "green", fontWeight: "600" }}>
          Thank you! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: errors.name ? "2px solid #e74c3c" : "1px solid #ccc",
              fontSize: "16px",
              outline: "none"
            }}
          />
          {errors.name && <span style={{ color: "#e74c3c", fontSize: "14px" }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: errors.email ? "2px solid #e74c3c" : "1px solid #ccc",
              fontSize: "16px",
              outline: "none"
            }}
          />
          {errors.email && <span style={{ color: "#e74c3c", fontSize: "14px" }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: errors.message ? "2px solid #e74c3c" : "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical",
              outline: "none"
            }}
          />
          {errors.message && <span style={{ color: "#e74c3c", fontSize: "14px" }}>{errors.message}</span>}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#0077cc",
            color: "white",
            padding: "12px 30px",
            borderRadius: "8px",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#005fa3"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#0077cc"}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
