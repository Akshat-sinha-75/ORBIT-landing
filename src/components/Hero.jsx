import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="tagline">ISRO SIH26168 • Navigation Innovation</span>
            <h1 className="heading-xl">
              Navigate the <br/>
              <span className="text-gradient-cyan">Unnavigable.</span>
            </h1>
            <p className="hero-description">
              ORBIT is an AI-powered Intelligent Dead Reckoning system that provides seamless, hyper-accurate positioning in GNSS-denied environments like tunnels, urban canyons, and deep forests.
            </p>
            
            <div className="hero-cta">
              <a href="https://orbit-psi-coral-64.vercel.app" className="btn-primary btn-lg">
                View Interactive Prototype <ArrowRight size={20} />
              </a>
              <a href="#how-it-works" className="btn-secondary btn-lg">
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="visual-card glass-panel">
            <div className="visual-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="visual-body">
              <div className="status-row">
                <MapPin className="icon-red" />
                <span>GNSS Signal Lost</span>
              </div>
              <div className="status-row active">
                <Activity className="icon-cyan pulse" />
                <span className="text-cyan font-mono">ORBIT DR ENGAGED</span>
              </div>
              <div className="visual-graph">
                {/* Abstract animated lines simulating IMU data */}
                <svg viewBox="0 0 100 40" className="waveform">
                  <path d="M0 20 Q 10 10, 20 20 T 40 20 T 60 20 T 80 20 T 100 20" className="path-bg" />
                  <path d="M0 20 Q 10 5, 20 20 T 40 10 T 60 30 T 80 15 T 100 20" className="path-active" />
                </svg>
              </div>
              <div className="stats-row font-mono">
                <div>CONF: <span className="text-green">98%</span></div>
                <div>DRIFT: <span className="text-cyan">1.2m</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
