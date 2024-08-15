// About.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import './About.css'; // Importe o arquivo CSS

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Aqui você pode colocar informações sobre sua empresa, produto ou serviço.</p>
        <p><i>Estamos comprometidos em fornecer a melhor solução para as suas necessidades.</i></p>
        <Link to="/">Voltar para Home</Link> 
      </div>
    </div>
  );
}

export default About;
