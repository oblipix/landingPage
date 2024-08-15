import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">My Landing Page</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#cta">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
