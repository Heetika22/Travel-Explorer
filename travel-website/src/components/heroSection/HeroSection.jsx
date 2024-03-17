// HeroSection.jsx
import React, { useEffect } from 'react';
import './HeroSection.css';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

function HeroSection() {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carousel = document.getElementById('carouselExampleIndicators');
    new window.bootstrap.Carousel(carousel);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
    <Header />
    <section className="hero">
      <div className="hero-content">
        <div className="message">
        <h2>Explore the World</h2>
        <p>Discover amazing destinations and create unforgettable memories.</p>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./images/beach.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./images/boat.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./images/dubai.png" alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./images/mountains.png" alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./images/train.png" alt="Fifth slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./images/waterfall.png" alt="Sixth slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default HeroSection;
