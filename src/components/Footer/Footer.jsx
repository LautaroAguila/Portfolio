import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <Container className="text-center py-5">
        <motion.div
          className="social-icons mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="https://w.app/jaf7ng" aria-label="Email">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/LautaroAguila" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lautaro-aguilar-19261b248/" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>

        <p className="footer-text mt-4">
          © {new Date().getFullYear()} Lautaro Aguilar — All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
