import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const myNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">fridge poppa</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Air Conditioner Contractor</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Commercial Refrigeration</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Refrigerator Repair Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Air Conditioning Repair Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Commercial Refrigerator Supplier</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default myNavbar;
