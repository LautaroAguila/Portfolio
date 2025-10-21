import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaHtml5,
  FaGitAlt,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { SiFirebase, SiMysql } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const currentSkills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  const learningSkills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <section className="skills-section" id="habilidades">
      <Container className="py-5">
        <motion.div
          className="skills-header text-center mb-5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="skills-title">Habilidades</h2>
          
        </motion.div>

        {/* ---- Using now ---- */}
        <motion.div
          className="skills-category mb-5"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="skills-heading">Tecnologías que domino </h3>
          <div className="skills-grid">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={fadeUp}
                whileHover={{ scale: 1.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---- Learning ---- */}
        <motion.div
          className="skills-category"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="skills-heading">Descubriendo</h3>
          <div className="skills-grid">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card learning"
                variants={fadeUp}
                whileHover={{ scale: 1.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
