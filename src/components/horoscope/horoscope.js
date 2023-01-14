import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from "react-router-dom";
import List from './list';
import { SIGNS } from './signs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './horoscope.css';

class Horoscope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: SIGNS
    };    
  }
  
  render() {
    return (
      <div className="horoscope">
        <Navbar className="header">
          <div className="container">
            <NavbarBrand className="text-white">Horoscope:)</NavbarBrand>
            <NavLink to="/home" className="link">
            <span className="header-icon"><FontAwesomeIcon icon={faClose} /></span> 
            </NavLink>
          </div>
        </Navbar>
        <div className="container">
          <h4 className="mb-4 mt-4" style={{ textAlign: 'center' }}>Just choose a card with your zodiac sign</h4>
        </div>
        <List signs={this.state.signs} />
      </div>
    );
  }
}

export default Horoscope;