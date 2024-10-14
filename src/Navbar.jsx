import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
