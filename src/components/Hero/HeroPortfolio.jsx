import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./HeroPortfolio.css";

const HeroPortfolio = () => {
  return (
    <div className="hero-container">
      
      {/* ---- Hero Section ---- */}
      <Container fluid className="hero-section">
        <Row className="align-items-center">
          {/* Left side */}
          <Col
            lg={6}
            className="hero-left d-flex flex-column justify-content-center  p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="intro-text">Hola, soy</p>
              <h1 className="hero-name">Lautaro Aguilar</h1>
              <p className="hero-role">Desarrollador Web / Estudiante de Data Science</p>

              <div className="social-icons mt-4">
                <a href="lautaroaguilar.c@gmail.com">
                  <FaEnvelope />
                </a>
                <a href="https://github.com/LautaroAguila">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/lautaro-aguilar-19261b248/">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* Right side */}
          <Col
            lg={6}
            className="hero-right d-flex justify-content-center align-items-end"
          >
            <motion.img
              src="src\assets\yo.png"
              alt="Profile"
              className="profile-img"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default HeroPortfolio;
