import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video id="vd" src="/videos/Qalstuk.mp4" autoPlay loop muted />
        <h1>Qalstuk bağlamağı öyrənək</h1>
      
    </div>
  );
}

export default HeroSection;