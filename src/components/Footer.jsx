import React from "react";
import '../cssfolder/index.css'
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="footer-container">
        <img src={logo} alt="Fazbear Pizza Logo" className="footer-logo" />
        <div className="footer-info">
          <h4>Fazbear Pizzeria</h4>
          <p>
            Welcome to **Fazbear Pizza**, home of the Fazbear Band!  
            Join Freddy, Bonnie, Chica, and Foxy for music, fun, and delicious pizza. 🍕🎵✨
          </p>
          <p>📍 123 Fun Street, Animatron City</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ contact@fazbearpizza.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 Fazbear Pizza. All rights reserved.
      </div>
    </footer>
  );
}