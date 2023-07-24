import React from "react";
import {
    Link
  } from "react-router-dom"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className= "container-fluid mx-2">
          <Navbar.Brand as={Link} to="/">Mystic Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Item className="ms-auto mx-2">
            <Button as={Link} to="/about" variant="outline-dark" className="rounded-pill mx-1">About</Button>
            <Button as={Link} to="/contact" variant="dark" className="rounded-pill mx-1">Contact Us</Button>
            </Nav.Item>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
}
