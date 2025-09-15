import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Only keep images actually used
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key projects I have worked on during my academic journey and personal learning.
          These projects highlight my skills in <span className="purple">Full Stack Development</span>,{" "}
          <span className="purple">Deep Learning</span>, and{" "}
          <span className="purple">Problem Solving</span>.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* fMRI Brain Decoding */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="fMRI Brain Decoding (2025)"
              description="Developed a deep learning model to classify brain activity from fMRI data across 200+ subjects, detecting anomalies (e.g., Alzheimer’s) and visualizing brain regions in 3D using Python, Keras, Tkinter, PyVista, and Nilearn."
              ghLink="https://github.com/chandhresh"
            />
          </Col>

          {/* Café Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Café Management System (2024)"
              description="Built a comprehensive web application to manage orders, menu, inventory, and payments using React.js, CSS, MySQL, and Firebase with real-time updates."
              ghLink="https://github.com/chandhresh"
            />
          </Col>

          {/* Online Movie Ticket Booking */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Movie Ticket Booking (2023)"
              description="Developed a ticket booking platform using HTML, CSS, JavaScript, PHP, and Firebase. Users can browse movies, select showtimes, choose seats, and confirm bookings with secure authentication."
              ghLink="https://github.com/chandhresh"
            />
          </Col>

          {/* Portfolio Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Portfolio Website (2025)"
              description="This portfolio website itself is created using React.js, React Bootstrap, and custom components to showcase my projects, skills, and resume in a professional way."
              ghLink="https://github.com/chandhresh"
              demoLink="http://localhost:3000"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
