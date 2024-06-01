import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/placestostay">Places to Stay</Link>
      <Link to="/requestbooking">Request Booking Consultation</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/connect">Connect</Link>
    </nav>
  );
}


export default NavBar;