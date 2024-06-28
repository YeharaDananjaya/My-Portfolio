// src/components/Contact.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css"; // Import custom CSS for additional styling

const Contact = () => {
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
      <Row className="mt-5">
        <Col className="text-center contact-info">
          <p>Email: your.email@example.com</p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/yourprofile">yourprofile</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
