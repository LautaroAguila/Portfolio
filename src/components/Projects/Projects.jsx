import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Projects.css";
import Lisa from "./assets/LISA.JPG";
import Asistent from "./assets/asistent.JPG";
import Basico from "./assets/empresas.JPG";
import Premium from "./assets/empresas2.JPG";
import Portafolio from "./assets/portfolio.JPG";
import Whatsapp from "./assets/WhatsApp.svg.webp";


const projects = [
  {
    title: "Asistent",
    img: Asistent,
    link: "https://asistent-ten.vercel.app/login",
  },
  {
    title: "LISA",
    img: Lisa,
    link: "https://lisa-lake.vercel.app/login",
  },
  {
    title: "Portafolio",
    img: Portafolio,
    link: "https://portfolio-blond-five-7m9xa81es2.vercel.app/",
  },
  {
    title: "Sitio web basico",
    img: Basico,
    link: "https://lordch2.vercel.app/",
  },
  {
    title: "Sitio web personalizable",
    img: Premium,
    link: "https://lordch.vercel.app/",
  },
  {
    title: "Tu web a medida",
    img: Whatsapp,
    link: "https://w.app/jaf7ng",
  },
];

const Projects = () => {
  return (
    <section className="portfolio-section" id="proyectos">
      <Container className="py-5">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="portfolio-title">Proyectos</h2>
          <p className="portfolio-subtitle">
            Algunos de mis trabajos mas recientes.
          </p>
        </motion.div>

        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="project-img-container">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <h5>{project.title}</h5>
                    <span>Visitar →</span>
                  </div>
                </div>
              </motion.a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
