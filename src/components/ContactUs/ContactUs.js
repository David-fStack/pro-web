import Form from "react-bootstrap/Form";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ContactUs.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {
  const form = useRef();
  const [captchaResponse, setCaptchaResponse] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaResponse) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    handleRecaptcha(captchaResponse);

    emailjs
      .sendForm(
        "service_vb2qxo4",
        "template_zyoxgci",
        form.current,
        "dpVKitEeeIkgi2rmg"
      )
      .then(
        (result) => {
          alert("Se envio correctamente");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleRecaptcha = async (response) => {
    try {
      const result = await axios.post("/.netlify/functions/verify-recaptcha", {
        response,
      });

      if (result.data.success) {
        console.log("Captcha verification success");
      } else {
        console.log("Captcha verification failed");
      }
    } catch (error) {
      console.log("Error verifying captcha:", error.message);
    }
  };

  return (
    <Form
      className="form_style container mt-4 mb-3 pb-3"
      ref={form}
      onSubmit={sendEmail}
      action="#"
      id="contact"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h4 className="text-center">Contactanos</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control
          type="text"
          name="user_name"
          placeholder="Escribe tu Nombre y Apellido"
          required
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="name@example.com"
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Numero de Celular</Form.Label>
          <Form.Control
            type="number"
            name="cel"
            placeholder="Ej.: (381) 153-456785"
            required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Pon Aqui Tu Consulta</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} required />
      </Form.Group>
      <ReCAPTCHA
        sitekey="6Lfrn40lAAAAALBW2Uh5Fevhp_8D6qw4cPxTINzB"
        onChange={setCaptchaResponse}
        theme="light"
        className="mb-3"
      />
      <input className="btn btn-primary mx-5" type="submit" value="Enviar" />
      </Form>
);
};
