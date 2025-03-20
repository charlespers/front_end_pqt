import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tms8lep", 
        "template_3nympie", // Replace with your actual template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "ehIklUwsQBQtReX5u" // Replace with your actual EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email", error);
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Floating Home Button */}
      <Link to="/" className="home-button">Home</Link>

      {/* Contact Section */}
      <section className="contact-content">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>We're excited to connect with you! Reach out with any questions, collaborations, or inquiries.</p>
          <h3>Email: pqt@princeton.edu</h3>
          <h3>Follow us on social media for updates!</h3>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          {isSent ? <p className="success-message">Message sent successfully!</p> : null}
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
