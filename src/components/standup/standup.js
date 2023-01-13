import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './standup.css';

const Fortune = ({ text }) => {
    return (
      <div className="standup">
        <Navbar className="header">
          <div className="container">
            <NavbarBrand className="text-white">There is a joke for you:)</NavbarBrand>
            <NavLink to="/" className="link">
            <span className="header-icon"><FontAwesomeIcon icon={faClose} /></span> 
            </NavLink>
          </div>
        </Navbar>
        <div className="container">
            <h4 className="mb-4 mt-4" style={{ textAlign: 'center', paddingBottom: '10px' }}>{text}</h4>
        </div>
      </div>
    );
}

export default Fortune;