// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-width-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-nav">
            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-link-hover"
              activeClassName="nav-link-active"
              exact
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link-hover"
              activeClassName="nav-link-active"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/projects"
              className="nav-link-hover"
              activeClassName="nav-link-active"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link-hover"
              activeClassName="nav-link-active"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
