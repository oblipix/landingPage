import React from 'react';
import './Features.css';


function Features() {
  return (
    <section id="features" className="features">
      <h4>Features</h4>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Feature One</h3>
          <p>Description of feature one.</p>
        </div>
        <div className="feature-item">
          <h3>Feature Two</h3>
          <p>Description of feature two.</p>
        </div>
        <div className="feature-item">
          <h3>Feature Three</h3>
          <p>Description of feature three.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
