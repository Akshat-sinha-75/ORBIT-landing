import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, ShieldCheck, Layers, Radar, Database } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Smartphone />,
    title: "Hardware Agnostic",
    desc: "Works on any modern smartphone. No external OBD2 dongles or specialized IMU hardware required."
  },
  {
    icon: <Zap />,
    title: "10Hz Real-Time Edge Processing",
    desc: "Processes complex Kalman filters and CNNs locally on the device without requiring cloud connectivity."
  },
  {
    icon: <ShieldCheck />,
    title: "Zero-Drift Architecture",
    desc: "Combines zero-velocity updates (ZUPT) and non-holonomic constraints (NHC) to suppress sensor drift."
  },
  {
    icon: <Layers />,
    title: "Multi-State Fusion",
    desc: "Intelligently falls back from tight GNSS-IMU fusion to pure DR, and back again smoothly upon recovery."
  },
  {
    icon: <Radar />,
    title: "Dynamic Device Alignment",
    desc: "Automatically detects how the phone is mounted in the car and aligns the sensor frame to the vehicle frame."
  },
  {
    icon: <Database />,
    title: "Map Matching via HMM",
    desc: "Hidden Markov Models ensure the calculated trajectory snaps to logical road segments in real-time."
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Engineering <span className="text-gradient">Excellence.</span></h2>
          <p className="section-subtitle">Built to solve ISRO's toughest navigation challenges.</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.1)', borderColor: 'rgba(0, 229, 255, 0.3)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
