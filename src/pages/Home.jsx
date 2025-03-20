/*
  Author: Charles 
  Description: Home page for PQT 
    - About
    - Meet the team
    - Sponsors
    - Description
    - Get in contact
  Notes:
    - Event listener for scrolling for "Hero Section"
  Consider Adding:
    - A navbar
    - A better background (currently just black text)
    - A projects section
*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Projects from "./Works.jsx";
// Import Photos
    //Sponsors
import Citadel from "../images/citadel_photo.png"
    //Members
import HomeGroup from "../images/home_group.png"
import President from "../images/jerry_headshot.jpg"
import VP1 from "../images/charles.png"
import VP2 from "../images/rodrigo_headshot.jpg"
import O1 from "../images/Tom_headshot.jpg"
import O2 from "../images/loc_headshot.jpg"
import O3 from "../images/andrew_headshot.png"
    // Get Involved
import GetInvolvedImage from "../images/background.jpeg";

//CSS
import "../css/Home.css";
import "../css/MeetTheTeam.css";
import "../css/GetInvolved.css"; 
import "../css/Sponsors.css";  
import { useEffect, useState } from "react";

function Home() {

  /* Event Listener - Scrolling Image*/
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home-hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="home-background text-white">


      {/* Title Section */}
      <section className="home-title">
        <h1>Princeton Quantitative Traders</h1>
        <h2>Education. Mentorship. Skill Building. Networking.</h2>
        <Link to="/about">
          <button className="bg-orange-500 text-white">Learn More</button>
        </Link>
      </section>



      {/* Home Hero Section */}
      <div
        id="home-hero"
        className={`home-hero ${isVisible ? "visible" : ""}`}
        style={{ backgroundImage: `url(${HomeGroup})` }}
      ></div>



      {/* Meet the Team Section */}
      <section className="meet-the-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {/* Team Members */}
          <div className="team-member">
            <img src={President} alt="President" />
            <h3>Jerry</h3>
            <p>President</p>
          </div>
          <div className="team-member">
            <img src={VP1} alt="Vice President 1" />
            <h3>Charles</h3>
            <p>Vice President</p>
          </div>
          <div className="team-member">
            <img src={VP2} alt="Vice President 2" />
            <h3>Rodrigo</h3>
            <p>Vice President</p>
          </div>
          <div className="team-member">
            <img src={O1} alt="Officer1 - Web" />
            <h3>Tom</h3>
            <p>Web Dev Officer</p>
          </div>
          <div className="team-member">
            <img src={O2} alt="Officer2 - Social" />
            <h3>Loc</h3>
            <p>Social Officer</p>
          </div>
          <div className="team-member">
            <img src={O3} alt="Officer - Competitions" />
            <h3>Andrew</h3>
            <p>Competitions Officer</p>
          </div>
        </div>
      </section>



      {/* Get Involved Section */}
      <section className="get-involved">
        <div className="get-involved-content">
          <h2>Join Princeton Quantitative Traders</h2>
          <p>
            Become part of a community of students passionate about quantitative finance and algorithmic trading.
          </p>
          <Link to="/contact">
            <button className="get-involved-btn">Get Involved</button>
          </Link>
        </div>
        <div className="get-involved-image">
          <img src={GetInvolvedImage} alt="Join Us" />
        </div>
      </section>
  
      
    


      {/* Sponsor Section */}
      <section className="sponsors">
        <h2 className="sponsor-title">Our Sponsors</h2>
        <div className="sponsor-tier gold-tier">
          <h3>Gold Sponsors</h3>
          <div className="sponsor-logos">
            <img src={Citadel} alt="Citadel" className="sponsor-logo gold" />
          </div>
        </div>
      </section>
      <Projects></Projects>
    </div>
  );
}

export default Home;
