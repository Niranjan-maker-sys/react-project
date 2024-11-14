import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import standard from '../components/standard.jpeg';
import deluxe from '../components/delexue.jpeg';
import suite from '../components/suite.jpeg';
import accessible from '../components/Acc.jpeg';
import family from '../components/family.jpeg';
import oceanview from '../components/oceanview.jpg';
import connecting from '../components/connecting.jpg';
import villa from '../components/villa.jpg';

// Sample data for rooms
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'A cozy room with essential amenities.',
    price: '$100/night',
    image: standard
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'A spacious room with premium amenities.',
    price: '$150/night',
    image: deluxe
  },
  {
    id: 3,
    name: 'Suite',
    description: 'Luxurious suite with extra space and high-end amenities.',
    price: '$250/night',
    image: suite
  },
  {
    id: 4,
    name: 'Accessible Room',
    description: 'Designed for disabled guests with larger bathrooms, lower beds, and handrails.',
    price: '$69/night',
    image: accessible
  },
  {
    id: 5,
    name: 'Family Suite',
    description: 'Perfect choice for a family with up to 3 children.',
    price: '$100/night',
    image: family
  },
  {
    id: 6,
    name: 'Ocean View Room',
    description: 'Enjoy a full view of the ocean from our Ocean View Suite.',
    price: '$169/night',
    image: oceanview
  },
  {
    id: 7,
    name: 'Connecting Family Room',
    description: 'Families, friends, and other travelling parties may request connecting rooms – separate rooms that are joined by a door..',
    price: '$100/night',
    image: connecting
  },
  {
    id: 8,
    name: 'Villas',
    description: 'A villa is a type of house that was originally an ancient Roman upper class country house',
    price: '$200/night',
    image: villa
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleBookRoom = (roomId) => {
    navigate(`/payment/${roomId}`);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Book your stay with Us</h1>
        <p>1,480,086 rooms around the world are waiting for you!</p>
        <div className="booking-options">
          <input type="text" placeholder="Location" />
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <input type="number" placeholder="Guests" min="1" />
          <button className="search-button">Search</button>
        </div>
      </header>

      <section className="room-options">
        <h2>Our Room Options</h2>
        <div className="room-list">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.name} className="room-image" />
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p className="room-price">{room.price}</p>
              <button className="book-room-button" onClick={() => handleBookRoom(room.id)}>Book Room</button>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our customer support team 24/7 via phone or email.</p>
      </section>
    </div>
  );
};

export default Home;
