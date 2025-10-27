import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚡ Enviar con EmailJS
    emailjs
      .send(
        "service_zwsjghu", // ⚠️ reemplazá con tu Service ID
        "template_qikruxz", // ⚠️ reemplazá con tu Template ID
        formData,
        "DfkRs-P8kpSCgCcKw" // ⚠️ reemplazá con tu Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("¡Mensaje enviado con éxito!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <section className="contact-section" id="contacto">
      <Container className="py-5">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">Contacto</h2>
        </motion.div>

        <motion.div
          className="contact-form-wrapper mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@mail.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 9 ..."
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="message">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Escribe tu mensaje..."
                required
              />
            </Form.Group>

            <Button variant="outline-light" type="submit" className="send-btn w-100">
              Enviar
            </Button>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
