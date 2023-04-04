import React from 'react';
import './Hero.css';
import logo from '../../Assets/logo/codevpro.png'
import 'animate.css';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
      <img className='logo_style animate__animated animate__backInDown mb-5 ' src={logo} alt="logo" />


      </div>
    </div>
  );
};

export default Hero;
