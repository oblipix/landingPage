import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About'; // Importe o componente About
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o React Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
