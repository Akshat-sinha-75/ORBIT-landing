import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container nav-container">
        <div className="nav-logo">
          <Compass className="logo-icon" />
          <span className="logo-text">ORBIT</span>
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#problem">The Problem</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
        </div>
        
        <div className="nav-actions desktop-only">
          <a href="/prototype/index.html" className="btn-primary btn-sm">Try Demo</a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu glass-panel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#problem" onClick={() => setMobileMenuOpen(false)}>The Problem</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="/prototype/index.html" className="btn-primary" style={{textAlign: 'center', marginTop: '1rem'}}>Try Demo</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
