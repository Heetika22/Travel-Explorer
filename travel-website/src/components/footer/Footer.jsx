// Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Travel Explorer</h2>
            <p>Your go-to destination for exploring amazing travel destinations and creating unforgettable memories.</p>
            <div className="contact">
              <span><i className="far fa-envelope"></i> contact@travelexplorer.com</span>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h2>Contact Information</h2>
            <p>123 Gandhi Road, Delhi, India</p>
            <p>Phone: +123-456-7890</p>
          </div >
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Travel Explorer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
