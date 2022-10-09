import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

const NavHeader = () => {
    return (
        <Navbar variant="light liner">
        <Container>
          <img className="logo" src="../../../../../logo.png" alt="logo" />
          <Nav className="heading">Place for your thoughts</Nav>
          <Nav className="me-auto links">
            <Nav.Link href="https://github.com/julikss/pink-twitter">
                <i className="fa fa-github"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavHeader;