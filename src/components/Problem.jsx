import React from 'react';
import { motion } from 'framer-motion';
import { NavigationOff, TriangleAlert, Mountain } from 'lucide-react';
import './Problem.css';

const Problem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-lg">The <span className="text-gradient">Blind Spot</span> of Modern Navigation.</h2>
          <p className="section-subtitle">
            Satellite navigation systems (GNSS/GPS) are brilliant, until you lose line-of-sight to the sky. When the signal drops, modern navigation goes blind.
          </p>
        </motion.div>

        <motion.div 
          className="problem-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="problem-card glass-panel" variants={itemVariants}>
            <div className="card-icon-wrap">
              <Mountain className="card-icon text-red" />
            </div>
            <h3>Tunnels & Underpasses</h3>
            <p>Immediate complete loss of signal. Stock navigation systems freeze or jump erratically.</p>
          </motion.div>

          <motion.div className="problem-card glass-panel" variants={itemVariants}>
            <div className="card-icon-wrap">
              <TriangleAlert className="card-icon text-amber" />
            </div>
            <h3>Urban Canyons</h3>
            <p>Tall skyscrapers cause multipath errors, reflecting signals and placing you blocks away from your true location.</p>
          </motion.div>

          <motion.div className="problem-card glass-panel" variants={itemVariants}>
            <div className="card-icon-wrap">
              <NavigationOff className="card-icon text-purple" />
            </div>
            <h3>Multi-level Parking</h3>
            <p>No signal and confusing multi-story geometries render standard map apps completely useless.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
