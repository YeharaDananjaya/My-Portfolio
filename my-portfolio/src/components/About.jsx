// src/components/About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiStar, FiUsers, FiCode } from "react-icons/fi"; // Import icons from react-icons/fi
import "./About.css"; // Import custom CSS for additional styling

const About = () => {
  return (
    <main className="about-main my-5">
      <Container className="about-container">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <div className="about-content">
              <h1 className="about-heading">About Me</h1>
              <p className="about-text">
                I am a third-year undergraduate at SLIIT, specializing in
                Software Engineering. My passion lies in crafting efficient and
                innovative solutions that drive organizational success.
              </p>
              <p className="about-text">
                Throughout my academic journey, I have developed strong
                problem-solving skills and a keen interest in web development,
                collaborating effectively within teams to achieve goals.
              </p>
              <div className="about-skills">
                <span className="badge">
                  <FiCode className="mr-1" /> Web Development
                </span>
                <span className="badge">
                  <FiUsers className="mr-1" /> Team Collaboration
                </span>
                <span className="badge">
                  <FiStar className="mr-1" /> Problem Solving
                </span>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="/path-to-your-image.jpg"
              alt="About me"
              className="about-image img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
