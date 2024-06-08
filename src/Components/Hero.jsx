import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Your money works better.</h1>
        <Link to="#" className="signup-btn">Sign Up for Free</Link>
      </div>
    </div>
  );
}

export default Hero;
