// components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#about">About Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;