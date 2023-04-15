import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ContactUs.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";

export const ContactUs = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [captchaResponse, setCaptchaResponse] = useState(null);

  const sendEmail = async (data, e) => {
    e.preventDefault();

    if (!captchaResponse) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    await handleRecaptcha(captchaResponse);

    emailjs
      .send(
        "service_vb2qxo4",
        "template_zyoxgci",
        data,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          alert("Se envio correctamente");
          e.target.reset();
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
      onSubmit={handleSubmit(sendEmail)}
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
          {...register("user_name", { required: true })}
        />
        {errors.user_name && <p>Este campo es obligatorio</p>}
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="name@example.com"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && <p>Este campo es obligatorio</p>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Numero de Celular</Form.Label>
          <Controller
            name="cel"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <Form.Control
                type="number"
                placeholder="Ej.: (381) 153-456785"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.cel && <p>Este campo es obligatorio</p>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Pon Aqui Tu Consulta</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          {...register("message", { required: true })}
        />
        {errors.message && <p>Este campo es obligatorio</p>}
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
