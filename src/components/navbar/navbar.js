import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';


const NavHeader = () => {
    return (
        <Navbar variant="light">
        <Container>
          <Navbar.Brand className="heading">Place for your thoughts</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Sign up</Nav.Link>
            <Nav.Link href="#pricing">Log in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavHeader;