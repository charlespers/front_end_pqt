import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/About.css";

function About() {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    "Innovation.",
    "Strategy.",
    "Excellence.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      
      {/* Floating Home Button */}
      <Link to="/" className="home-button">Home</Link>

      {/* Hero Section with Dynamic Text */}
      <section className="about-hero">
        <h1>About Princeton Quantitative Traders</h1>
        <h2 className="dynamic-text">{messages[textIndex]}</h2>
      </section>

      {/* About Content */}
      <section className="about-content fade-in">
        <h3>Who We Are</h3>
        <p>
          Princeton Quantitative Traders is a premier organization dedicated to 
          educating students on algorithmic trading, quantitative strategies, and 
          financial technology. Our members engage in cutting-edge research and 
          collaborate on high-impact projects.
        </p>
      </section>

      {/* Interactive Mission Section */}
      <section className="about-mission">
        <h3>Our Mission</h3>
        <p>
          Our goal is to bridge the gap between theoretical finance and practical 
          application. Through mentorship, competitions, and industry partnerships, 
          we prepare students for careers in quantitative finance and beyond.
        </p>
      </section>

      {/* Call to Action */}
      <section className="about-cta fade-in">
        <h2>Join Us Today</h2>
        <p>Become part of Princeton’s leading community in quantitative finance.</p>
        <Link to="/contact">
          <button className="cta-button">Get Involved</button>
        </Link>
      </section>

    </div>
  );
}

export default About;
