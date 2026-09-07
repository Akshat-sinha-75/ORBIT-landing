import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Map } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: <Activity />,
    title: "Sensor Fusion & Calibration",
    desc: "ORBIT taps into standard smartphone IMUs (accelerometer, gyroscope, magnetometer). It instantly compensates for gravity and arbitrary phone orientation within the vehicle.",
    color: "cyan"
  },
  {
    icon: <Cpu />,
    title: "AI Motion Classification",
    desc: "A lightweight Convolutional Neural Network (CNN) classifies movement states (stationary, driving, walking) to filter noise and apply Non-Holonomic Constraints (NHC).",
    color: "purple"
  },
  {
    icon: <Map />,
    title: "UKF Fusion & Map Matching",
    desc: "An Unscented Kalman Filter fuses the DR path with last known GNSS states, while a Hidden Markov Model snaps the drifted trajectory perfectly onto the road network.",
    color: "blue"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="hiw-section">
      <div className="container">
        <div className="hiw-content">
          <motion.div 
            className="hiw-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="heading-lg">How <span className="text-gradient-cyan">ORBIT</span> Bridges the Gap.</h2>
            <p className="section-subtitle">
              When GNSS drops, ORBIT immediately takes over. Using an advanced 10-stage processing pipeline on the edge, it predicts your path purely from inertial physics and machine learning.
            </p>
            
            <div className="steps-container">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="step-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className={`step-icon-wrap color-${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="step-info">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="hiw-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Animated Pipeline Graphic */}
            <div className="pipeline-graphic glass-panel">
               <div className="pipeline-nodes">
                  <div className="node active">GNSS Lost</div>
                  <div className="line animated"></div>
                  <div className="node highlight">IMU Active</div>
                  <div className="line animated"></div>
                  <div className="node highlight">UKF Fusion</div>
                  <div className="line animated"></div>
                  <div className="node success">Seamless Nav</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
