import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ReactComponent as Logo } from '../images/DH-Black.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="dollhouse-logo">
            <Logo src="logo" alt="Dollhouse Logo" />
        </div>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/searchdestinations">Search Destinations</Link></li>
            <li><Link to="/requestbooking">Request Booking Consultation</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/connect">Connect</Link></li>
       </ul>
    </nav>
  );
}


export default NavBar;