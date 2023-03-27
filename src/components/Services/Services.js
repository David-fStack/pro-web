import React from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Services = () => {
    return (
        <div className="parallax">
            <div className="container pt-5">
                <h3 className='text-light text-center'>Nuestros servicios</h3>
                <div className="row">
                    <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
                        <h3 className='text_style_services'>Diseño y desarrollo de páginas web personalizadas</h3>
                    </div>
                    <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
                        <h3 className='text_style_services'>Diseño y desarrollo de tiendas en línea</h3>
                    </div>
                    <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
                        <h3 className='text_style_services'>Desarrollo de sitios web responsive</h3>
                    </div>
                    <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
                        <h3 className='text_style_services'>Optimización para motores de búsqueda (SEO)</h3>
                    </div>
                    <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
                        <h3 className='text_style_services'>Mantenimiento y soporte técnico</h3>
                    </div>
                    <div className=" col text-wrap col-lg-4 col-md-6 col-sm-12">
                        <h3 className='text_style_services'>Diseño y desarrollo de contenido</h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;
