import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// Import the CSS file for our projects section
import "../css/Works.css";

// Adjust these imports to match your actual file paths:
import { SectionWrapper } from "../hoc";  // Named export from hoc/index.js
import { projects } from "../constants";  // Your projects array
import { fadeIn, textVariant } from "../utils/motion"; // Animation variants

// ----- ProjectCard Component -----
const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      className="project-card"
      variants={fadeIn("up", "spring", 0.1, 0.75)}
    >
      <Tilt options={{ max: 5, scale: 1, speed: 400 }}>
        
        {/* Image Container */}
        <div className="project-image-container">
          <img src={image} alt="project_image" />
        </div>
        
        {/* Text Content */}
        <div className="project-text">
          <h3 className="project-title">{name}</h3>
          <p className="project-description">{description}</p>
          
          {/* Tags */}
          <div className="project-tags">
            {tags.map((tag) => (
              <p key={tag.name}>{`#${tag.name}`}</p>
            ))}
          </div>
        </div>
        
        {/* Button below the project content */}
        <div className="project-button-container">
          <button
            className="project-button"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            View Project!
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

// ----- Works Component (Projects Section) -----
const Works = () => {
  return (
    <section className="projects-section">
      {/* Section Title */}
      <motion.div variants={textVariant()} className="projects-title">
        Our Projects
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
