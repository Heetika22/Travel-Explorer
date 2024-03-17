// Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
        <Link to="/" className="brand">Travel Explorer</Link>
          <div className="header-right">
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item"><a href="/destinations">Destinations</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <form className="search">
              <input type="text" className="search-input" placeholder="Search" />
              <button className="search-button">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
