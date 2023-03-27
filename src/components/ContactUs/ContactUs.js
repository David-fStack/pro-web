import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ContactUs.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zc2chqc', 'template_d7yszhu', form.current, 'ktTFPHBrr6z2YHCTp')
            .then((result) => {
                alert('Se envio correctamente');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
            <Form className='form_style container mt-4 mb-3 pb-3' ref={form} onSubmit={sendEmail} action="#"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <h4 className='text-center'>Contactanos</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Escribe tu Nombre y Apellido" />
                </Form.Group>



                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="user_email" placeholder="name@example.com" />

                    </Form.Group>

                    <Form.Group as={Col}>

                        <Form.Label>Numero de Celular</Form.Label>
                        <Form.Control type="number" name="cel" placeholder="Ej.: (381) 153-456785" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Pon Aqui Tu Consulta</Form.Label>
                    <Form.Control as="textarea" name='message' rows={3} />
                </Form.Group>
                <input className='btn btn-primary mx-5' type="submit" value="Enviar" />
            </Form>
    );
}





