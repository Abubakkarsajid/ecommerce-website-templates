import React, { useState, useEffect } from 'react';
import './custom.css'; // Import the CSS file for animations
import { NavLink } from 'react-router-dom';

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [
    'img/background1.jpg',
    'img/background2.jpg',
    'img/background3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000); // Match the CSS transition duration
    }, 3500);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div
      className={`hero min-h-screen ${fade ? 'fade-out' : 'fade-in'}`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
          <p className="mb-5">
            Welcome to One Solutions - your one-stop shop for seamless online shopping! Explore our diverse range of products, designed to meet all your needs in just a few clicks.
          </p>
          <NavLink to={`/shop`} className="btn btn-primary">Shop Now</NavLink>
        </div>
      </div>
    </div>
  );
};
