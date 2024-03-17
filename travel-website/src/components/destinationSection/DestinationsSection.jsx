// DestinationSection.jsx
import React from 'react';
import './DestinationSection.css';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const destinations = [
  {
    id: 1,
    name: 'Beach Paradise',
    image: "./images/islands.png", // Adjusted image path
    description: 'Enjoy the sun, sand, and surf at our luxurious beach resorts. Enjoy the beaches',
  },
  {
    id: 2,
    name: 'Mountain Retreat',
    image: "./images/mountains2.png", // Adjusted image path
    description: 'Escape to the tranquility of the mountains and breathe in the fresh mountain air.',
  },
  {
    id: 3,
    name: 'City Exploration',
    image: "./images/city.png", // Adjusted image path
    description: 'Discover the vibrant energy of bustling cities with rich history and culture. Live the life of cities',
  },
  {
    id: 4,
    name: 'Safari Adventure',
    image: "./images/safari.png", // Adjusted image path
    description: 'Embark on an unforgettable safari journey and witness majestic wildlife in their natural habitat.',
  },
  {
    id: 5,
    name: 'Greece Escapade',
    image: "./images/greeece.png",
    description: 'Experience the charm of ancient ruins, beautiful beaches, and delicious cuisine in Greece.',
  },
  {
    id: 6,
    name: 'Maldives Paradise',
    image: "./images/maldives.png",
    description: 'Indulge in luxury and relaxation surrounded by crystal-clear waters and overwater bungalows in the Maldives.',
  },
  {
    id: 7,
    name: 'Dubai Oasis',
    image: "./images/dubaii.png",
    description: 'Immerse yourself in the opulence and futuristic architecture of Dubai, where luxury meets adventure.',
  },
  {
    id: 8,
    name: 'Hong Kong Advent',
    image: "./images/hongkong.png",
    description: 'Experience the vibrant culture, delicious street food, and iconic skyline of Hong Kong.',
  },
];

function DestinationSection() {
  return (
    <>
    <Header />
    <section className="destination">
      <div className="container">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {destinations.map(destination => (
            <div key={destination.id} className="card">
              <img src={destination.image} alt={destination.name} />
              <div className="card-body">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default DestinationSection;
