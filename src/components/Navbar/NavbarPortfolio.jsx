import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import "./NavbarPortfolio.css";
import Logo from "../../assets/logo.png";

const NavbarPortfolio = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  // ---- Controlar visibilidad según scroll (navbar arriba/abajo) ----
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) setVisible(false);
      else setVisible(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ---- Cerrar menú al hacer clic fuera ----
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  // ✅ ---- Cerrar menú si se scrollea en móvil ----
  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) setShowMenu(false);
    };

    if (showMenu) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMenu]);

  return (
    <motion.nav
      className="custom-navbar"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: "10px",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container fluid className="d-flex justify-content-between align-items-center px-4">
        {/* ---- LOGO (solo visible en desktop) ---- */}
        <motion.div
          className="logo-container d-none d-lg-flex"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
        >
          <motion.a
            href="#"
          >
            <motion.img
              src={Logo}
              alt="Logo"
              className="navbar-logo"
              
              whileHover={{
                scale: [1, 1.05, 1],
                transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.a>
        </motion.div>

        {/* ---- BOTÓN MENU (solo móvil) ---- */}
        <div className="d-lg-none" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <Menu size={32} />
        </div>

        {/* ---- LINKS DESKTOP ---- */}
        <motion.div
          className="d-none d-lg-flex align-items-center links-box"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Nav className="ms-auto">
            {["Sobre mi", "Proyectos", "Habilidades", "Contacto"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="nav-link fw-semibold text-dark mx-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              >
                {item}
              </motion.a>
            ))}
          </Nav>
        </motion.div>

        {/* ---- MENÚ MÓVIL DESLIZANTE ---- */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              ref={menuRef}
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="position-fixed top-0 end-0 vh-100 d-flex flex-column align-items-center p-4"
              style={{
                background: "linear-gradient(135deg, #e0e0e05e, #cfcfcf5e)",
                width: "75%",
                zIndex: 1050,
              }}
            >
              {/* Logo dentro del menú móvil */}
              <motion.img
                src={Logo}
                alt="Logo"
                className="navbar-logo mb-4"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  position: "relative",
                  top: "0",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <Nav className="flex-column text-center w-100">
                {["Sobre mi", "Proyectos", "Habilidades", "Contacto"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="nav-link text-dark fs-4 fw-semibold py-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={closeMenu}
                  >
                    {item}
                  </motion.a>
                ))}
              </Nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
};

export default NavbarPortfolio;
