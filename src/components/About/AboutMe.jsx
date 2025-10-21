import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about-section" id="sobre-mi">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <motion.div
          className="about-card p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* ---- Sobre mí ---- */}
          <motion.div variants={fadeUp}>
            <h2 className="about-title mb-4">Sobre mí</h2>
            <p className="about-text">
              Soy un <span>estudiante de Ciencias de Datos en la UBA</span>, apasionado por el{" "}
              <span>desarrollo web</span> y la creación de experiencias digitales modernas e intuitivas.
              Me formé como <span>técnico en sistemas y programación</span> a nivel secundario, y desde entonces 
              disfruto combinar el análisis de datos con el diseño y la programación.
            </p>
            <p className="about-text">
              En el ámbito del desarrollo web, apliqué lo aprendido en academias y cursos donde adquirí
              conocimientos sobre <span>React, Bootstrap, CSS y HTML</span>. Actualmente, en la facultad,
              profundizo en lenguajes como <span>Python</span> y en el manejo de bases de datos como <span>SQL</span>.
            </p>
          </motion.div>

          {/* ---- Educación ---- */}
          <motion.div className="about-block" variants={fadeUp}>
            <h3 className="sub-title mb-3">Educación</h3>
            <ul className="about-list">
              <li>
                <span className="highlight">Licenciatura en Ciencias de Datos</span> — Universidad de Buenos Aires (Actualidad)
              </li>
              <li>
                <span className="highlight">Técnico en Sistemas y Programación</span> — Hogar Naval Stella Maris
              </li>
            </ul>
          </motion.div>

          {/* ---- Experiencia ---- */}
          <motion.div className="about-block" variants={fadeUp}>
            <h3 className="sub-title mb-3">Experiencia</h3>
            <ul className="about-list">
              <li>
                <span className="highlight">Desarrollo de aplicaciones web y landing pages personalizadas</span>
                <p className="about-small">
                  Diseño y desarrollo de sitios modernos y adaptativos utilizando React, Bootstrap, CSS y HTML.
                  Algunos de mis trabajos pueden verse en la sección de proyectos.
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutMe;
