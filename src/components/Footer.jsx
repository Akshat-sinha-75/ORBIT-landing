import React from 'react';
import { Compass } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <Compass className="logo-icon" />
              <span className="logo-text">ORBIT</span>
            </div>
            <p className="footer-desc">
              Intelligent Dead Reckoning System. <br/>
              Developed for ISRO SIH26168.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#problem">The Problem</a>
              <a href="#how-it-works">How it Works</a>
              <a href="#features">Features</a>
            </div>
            <div className="link-group">
              <h4>Demo</h4>
              <a href="/prototype/index.html">Web Simulator</a>
              <a href="/prototype/index.html">Architecture</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ORBIT Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
