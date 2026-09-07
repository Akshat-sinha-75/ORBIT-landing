import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css'; // Add some App specific styles if needed

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
