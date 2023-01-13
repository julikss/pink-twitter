import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const NavHeader = () => {
    return (
        <Navbar variant="light liner">
        <Container>
          <Nav className="heading">
            <span className="header-icon"><FontAwesomeIcon icon={faLightbulb} /></span> 
             Place for your thoughts
          </Nav>
          <Nav className="links">
            <Nav.Link href="https://github.com/julikss/pink-twitter">
                <i className="horoscope">Check your horoscope</i>
            </Nav.Link>
            <Nav.Link href="https://github.com/julikss/pink-twitter">
                <span className="code-link"><FontAwesomeIcon icon={faCode} /></span>
            </Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    )
}

export default NavHeader;