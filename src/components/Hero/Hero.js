import React from 'react';
import './Hero.css'
import logo from '../../Assets/logo/codevpro.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Hero = () => {
    return (
        <div className='img_hero'>
            <img className='logo_style animate__zoomInDown' src={logo} alt="" />
        </div>
    );
};

export default Hero;