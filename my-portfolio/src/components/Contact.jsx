// src/components/Contact.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiMail, FiLinkedin } from "react-icons/fi"; // Import icons from react-icons/fi
import "./Contact.css"; // Import custom CSS for additional styling

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000); // Reset copied message after 3 seconds
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fluid className="my-5">
      <h1 className="text-center mb-5">Contact</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                className="form-control"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col className="text-center">
          <Button
            variant="outline-primary"
            className="btn-contact"
            onClick={toggleExpand}
          >
            Contact
          </Button>
        </Col>
      </Row>
      {expanded && (
        <div className="expanded-contact">
          <Row className="mt-3">
            <Col className="text-center">
              <Button
                variant="outline-primary"
                className="btn-expand-close"
                onClick={toggleExpand}
              >
                Close
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center contact-info">
              <p>
                <FiMail />{" "}
                <a
                  href="#"
                  onClick={handleCopyEmail}
                  className="contact-info-link"
                >
                  your.email@example.com
                </a>
              </p>
              <p>
                <FiLinkedin />{" "}
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  className="contact-info-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yourprofile
                </a>
              </p>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Contact;
