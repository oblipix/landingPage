import React from 'react';
import './CallToAction.css';

function CallToAction() {
  const handleSignUp = () => {
    const phoneNumber = '553199999999'; // number WhatsApp (inclua o código do país e DDD)
    const message = 'Olá, gostaria de me inscrever!';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="cta" className="cta">
      <h2>Contact us now</h2>
      <button onClick={handleSignUp} className="signup-button">
        Contact
      </button>
    </section>
  );
}

export default CallToAction;
