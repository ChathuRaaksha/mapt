// src/components/layout/Navbar.tsx
import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/iter-logo.png';
const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-3">
      {/* Brand on the left */}
      
      <BootstrapNavbar.Brand as={NavLink} to="/" className="brand-logo">
      <img
            src={logoImage}
            alt="iTer Logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
        iTer
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        {/* Navigation buttons on the right */}
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" end className="nav-btn">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/destinations" className="nav-btn">
            Destinations
          </Nav.Link>
          <Nav.Link as={NavLink} to="/planning" className="nav-btn">
            Planning
          </Nav.Link>
          <Nav.Link as={NavLink} to="/inspiration" className="nav-btn">
            Inspiration
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="nav-btn">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="nav-btn">
            Contact Us
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;