import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Hero.css';

function Hero() {
  const navigate = useNavigate(); 

  const handleLearnMoreClick = () => {
    navigate('/about'); 
  };

  return (
    <section id="hero" className="hero">
      <h1>Welcome to My Landing Page</h1>
      <p>Your solution for amazing landing pages.</p>
      <button onClick={handleLearnMoreClick} className="btn-learn-more">Learn More</button> {/* Botão que redireciona */}
    </section>
  );
}

export default Hero;
