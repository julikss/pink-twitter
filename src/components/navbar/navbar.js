import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
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
          <NavLink to="/horoscope" className="link">
            <i className="link-button">Horoscope</i>
          </NavLink>
          <NavLink to="/fortune" className="link">
            <i className="link-button">Jokes</i>
          </NavLink>
          <NavLink href="https://github.com/julikss/pink-twitter">
            <span className="code-link"><FontAwesomeIcon icon={faCode} /></span>
          </NavLink>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavHeader;