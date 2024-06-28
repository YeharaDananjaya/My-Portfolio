// src/components/About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Import custom CSS for additional styling

const About = () => {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={6} className="my-auto">
          <h1 className="about-heading">About Me</h1>
          <p className="about-text">
            I am a third-year undergraduate at SLIIT, specializing in Software
            Engineering. I have a passion for developing innovative programs
            that expedite the efficiency and effectiveness of organizational
            success.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/path-to-your-image.jpg"
            alt="About me"
            className="img-fluid rounded about-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
