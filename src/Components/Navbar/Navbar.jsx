import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <h2 className="logo">Swastha<span> Santulan</span></h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Link to="/login"><button type='button'>Log In</button></Link>
      </nav>
    </div>
  )
}

export default Navbar;