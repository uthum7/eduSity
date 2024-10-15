import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
    
     const[sticky,setSticky]= useState(false);
     useEffect (()=>{
          window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true):setSticky(false);
          })
     },[]);
  return (
    <nav className={`navbar $ {sticky? 'dark-nav' :''}`}>
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
