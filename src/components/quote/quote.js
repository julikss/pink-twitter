import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './quote.css';

const QuoteTeller = ({ quote }) => {
  return (
    <div className="quote">
      <Navbar className="header">
        <div className="container">
          <NavbarBrand className="text-white">There is a quote for you:)</NavbarBrand>
          <NavLink to="/home" className="link">
          <span className="header-icon"><FontAwesomeIcon icon={faClose} /></span> 
          </NavLink>
        </div>
      </Navbar>
      <div className="container">
          <h4 className="mb-4 mt-4" style={{ textAlign: 'center', paddingBottom: '10px' }}>{quote}</h4>
      </div>
    </div>
  );
}

export default QuoteTeller;