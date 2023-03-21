import React from 'react';
// import logo from '../../Assets/logo/codevpro.png'
import './Seo.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Seo = () => {
    AOS.init();
    return (
        <section className='container-fluid pb-5 seo-container'>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='seo-content'>
                        {/* <img src={logo} alt="Codevpro logo" className="logo-style" /> */}
                        <h2 className='seo-heading' data-aos="fade-up">Qué hacemos en Codevpro</h2>
                        <p className='seo-text'>
                            Como empresa joven, nuestro enfoque en el desarrollo de páginas web es ofrecer soluciones modernas y eficientes que ayuden a nuestros clientes a destacar en un mercado cada vez más competitivo. Nos especializamos en el diseño y desarrollo de sitios web personalizados, con un enfoque en la optimización para dispositivos móviles y la accesibilidad.
                        </p>
                        <p className='seo-text'>
                            Nuestro equipo de programadores y diseñadores jóvenes y talentosos trabaja en estrecha colaboración con nuestros clientes para comprender sus necesidades y objetivos, y para crear sitios web que sean atractivos, funcionales y fáciles de usar. Utilizamos tecnologías modernas como HTML5, CSS3, JavaScript y ReactJS para crear sitios web rápidos y receptivos que se carguen rápidamente y ofrezcan una experiencia de usuario óptima.
                        </p>
                        {/* <p className='seo-text'>
                            Además, ofrecemos servicios adicionales como optimización para motores de búsqueda (SEO), marketing en línea y gestión de redes sociales para ayudar a nuestros clientes a mejorar su presencia en línea y atraer a más visitantes a su sitio web.
                        </p> */}
                        <p className='seo-text'>
                            En resumen, nuestro enfoque en el desarrollo de páginas web es ofrecer soluciones modernas y eficientes que ayuden a nuestros clientes a destacar en un mercado cada vez más competitivo, utilizando tecnologías avanzadas y un enfoque centrado en el usuario para crear sitios web atractivos y funcionales.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Seo;
