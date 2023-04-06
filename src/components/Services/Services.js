// import React from 'react';
// import './Services.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Services = () => {
//     return (
//         <div className="parallax" id='servi'>
//             <div className="container pt-5">
//                 <h3 className='text-light text-center'>Nuestros servicios</h3>
//                 <div className="row">
//                     <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
//                         <h3 className='text_style_services'>Diseño y desarrollo de páginas web personalizadas</h3>
//                     </div>
//                     <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
//                         <h3 className='text_style_services'>Diseño y desarrollo de tiendas en línea</h3>
//                     </div>
//                     <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
//                         <h3 className='text_style_services'>Desarrollo de sitios web responsive</h3>
//                     </div>
//                     <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
//                         <h3 className='text_style_services'>Optimización para motores de búsqueda (SEO)</h3>
//                     </div>
//                     <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
//                         <h3 className='text_style_services'>Mantenimiento y soporte técnico</h3>
//                     </div>
//                     <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
//                         <h3 className='text_style_services'>Diseño y desarrollo de contenido</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Services;

import React from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    return (
        <div className="parallax" id='services'>
            <div className="container pt-5">
                <h3 className='text-light text-center display-4 mb-5 title_ser'>Nuestros servicios</h3>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 text-wrap">
                            <div className="card-body">
                                <h3 className='card-title text_style_services'>Programación y diseño web</h3>
                                <p className='p_style_text'>Desarrollamos sitios web a medida y con diseño moderno, adaptándonos a tus necesidades y utilizando las últimas tecnologías.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 text-wrap">
                            <div className="card-body">
                                <h3 className='card-title text_style_services'>Mantenimiento e implementación de redes y servidores</h3>
                                <p className='p_style_text'>Ofrecemos servicios de implementación, configuración, mantenimiento de redes, garantizando su correcto funcionamiento.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 text-wrap">
                            <div className="card-body">
                                <h3 className='card-title text_style_services '>Asesoramiento y reparación de computadoras</h3>
                                <p className='p_style_text'>Brindamos asesoramiento en la adquisición de nuevos equipos y solucionamos problemas de hardware y software en computadoras.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
