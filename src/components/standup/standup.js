import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import './standup.css';

const JokesTeller = ({ text }) => {
  return (
      <div className="standup">
        <Navbar className="header">
          <div className="container">
            <NavbarBrand className="text-white">There is a joke for you:)</NavbarBrand>
            <NavLink to="/home" className="link">
            <span className="header-icon"><FontAwesomeIcon icon={faClose} /></span> 
            </NavLink>
          </div>
        </Navbar>
        <div className="container">
            <h4 className="mb-4 mt-4" style={{ textAlign: 'center' }}>{text}</h4>
            <div className="icons">
            <NavLink to="/home" className="link">
              <span className="bottom-like"><FontAwesomeIcon icon={faThumbsUp} /></span>
            </NavLink>
            <NavLink to="/home" className="link">
              <span className="bottom-dislike"><FontAwesomeIcon icon={faThumbsDown} /></span>
            </NavLink>
            </div>
        </div>
      </div>
    );
}

export default JokesTeller;