import React from 'react';
import './Parallax.css';
import logo from '../../Assets/logo/codevpro.png'
import 'animate.css';


const Parallax = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-content">
      <img className='logo_style animate__animated animate__backInDown' src={logo} alt="logo" />


      </div>
    </div>
  );
};

export default Parallax;
