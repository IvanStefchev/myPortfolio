function Contact() {
  return (
    <section className="container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>
          Have a question, idea, or just want to connect? Feel free to send me a message!
        </p>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
