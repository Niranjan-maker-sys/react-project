// src/components/Payment.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Payment.css';
import standard from '../components/standard.jpeg';
import delexue from '../components/delexue.jpeg';
import suite from '../components/suite.jpeg';
import Acc from '../components/Acc.jpeg';
import family from '../components/family.jpeg';
import oceanview from '../components/oceanview.jpg';
import connecting from '../components/connecting.jpg';
import villa from '../components/villa.jpg';

// Sample room data (in a real app, you might fetch this from an API or state)
const roomData = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'A cozy room with essential amenities.',
    price: '$100/night',
    image: standard // Replace with actual image path
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'A spacious room with premium amenities.',
    price: '$150/night',
    image: delexue // Replace with actual image path
  },
  {
    id: 3,
    name: 'Suite',
    description: 'Luxurious suite with extra space and high-end amenities.',
    price: '$250/night',
    image: suite // Replace with actual image path
  },
  {
    id: 4,
    name: 'Accessible rooms',
    description: 'Designed for disabled guests, and are usually found on the ground floor, and may have larger bathrooms, lower beds, and handrails ',
    price: '$69/night',
    image: Acc// Replace with actual image path
  },
  {
    id: 5,
    name: 'Family Suite Rooms',
    description: 'Perfect choice for a family with up to 3 children',
    price: '$100/night',
    image: family// Replace with actual image path
  },
  {
    id: 6,
    name: 'Ocean View Rooms',
    description: 'Enjoy a full view of the Indian Ocean from our Ocean View Suite and make the most of the spacious suite',
    price: '$169/night',
    image: oceanview// Replace with actual image path
  },
  {
    id: 7,
    name: 'Connecting Family Room',
    description: 'Families, friends, and other travelling parties may request connecting rooms – separate rooms that are joined by a door..',
    price: '$169/night',
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

const Payment = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [bookingDateTime, setBookingDateTime] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedRoom = roomData.find((room) => room.id === parseInt(roomId));
    setRoom(selectedRoom);
  }, [roomId]);

  const handlePayment = () => {
    if (bookingDateTime) {
      setPaymentSuccess(true);
    } else {
      alert('Please select a date and time for booking.');
    }
  };

  if (paymentSuccess) {
    return (
      <div className="payment-success">
        <h2>Room Booked</h2>
        <p>Your room has been successfully booked for {new Date(bookingDateTime).toLocaleString()}. Thank you for choosing our hotel!</p>
        <button onClick={() => navigate('/home')}>Go to Home</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      {room && (
        <div className="room-details">
          <img src={room.image} alt={room.name} className="room-image" />
          <h3>{room.name}</h3>
          <p>{room.description}</p>
          <p>{room.price}</p>
        </div>
      )}
      <div className="booking-details">
        <label>
          Booking Date and Time:
          <input
            type="datetime-local"
            value={bookingDateTime}
            onChange={(e) => setBookingDateTime(e.target.value)}
            required
          />
        </label>
      </div>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Payment;
