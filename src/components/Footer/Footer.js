import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../../Assets/logo/codevproblanco.png';
import 'animate.css/animate.min.css';

const Footer = () => {
  const [iconClass, setIconClass] = useState({});

  const handleMouseEnter = (icon) => {
    setIconClass({
      ...iconClass,
      [icon]: 'animate__animated animate__rubberBand',
    });
  };

  const handleMouseLeave = (icon) => {
    setIconClass({
      ...iconClass,
      [icon]: '',
    });
  };

  return (
    <footer className="footer bg-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 text-center">
            <img src={logo} alt="DEVCODEPRO" className="footer-logo mb-3" />
            <p className="text-muted">San Miguel de Tucumán, Argentina</p>
            <p className="text-muted">Teléfono: +54 (381) 156354150</p>
            <p className="text-muted">Email: codevpro@gmail.com</p>
          </div>
          <div className="col-12 col-md-4 text-center mb-3">
            <h5 className="text-uppercase">Síguenos en</h5>
            <div className="footer-social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF
                  className={iconClass.facebook}
                  onMouseEnter={() => handleMouseEnter('facebook')}
                  onMouseLeave={() => handleMouseLeave('facebook')}
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram
                  className={iconClass.instagram}
                  onMouseEnter={() => handleMouseEnter('instagram')}
                  onMouseLeave={() => handleMouseLeave('instagram')}
                />
              </a>
              <a href="https://wa.me/+549381635-4150" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp
                  className={iconClass.whatsapp}
                  onMouseEnter={() => handleMouseEnter('whatsapp')}
                  onMouseLeave={() => handleMouseLeave('whatsapp')}
                />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube
                  className={iconClass.youtube}
                  onMouseEnter={() => handleMouseEnter('youtube')}
                  onMouseLeave={() => handleMouseLeave('youtube')}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
