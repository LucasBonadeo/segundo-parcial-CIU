import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../assets/img/logo-nasa.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./components-style/barraNavegacion.css";

const BarraNavegacion = () => {
  const [modalAbierta, setModalAbierta] = useState(false);

  const abrirModal = () => {
    setModalAbierta(true);
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        bg="dark"
        className="fixed-top navbar"
        id="home"
      >
        <Container>
          <Navbar.Brand className="text-light">
            <a href="#container">
              <Image src={logo} alt="Logo" className="logo" />
            </a>
            APIC-NASA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className="text-light float link-navbar"
                onClick={abrirModal}
              >
                ¿Que es APIC-NASA?
              </Nav.Link>
              <Nav.Link
                href="#day-pic"
                className="text-light float link-navbar"
              >
                APOD
              </Nav.Link>
              <Nav.Link
                href="#favoritos"
                className="text-light float link-navbar"
              >
                Favoritos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={modalAbierta}
        onHide={() => setModalAbierta(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="ventana-modal">
          <Modal.Title>¿Qué es APIC-NASA?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ventana-modal">
          <p>
            APIC-NASA es una plataforma que te permite explorar las imágenes más
            sorprendentes capturadas por la NASA. Cada día, la NASA publica una
            nueva "Imagen del Día" (APOD) que muestra una vista fascinante del
            cosmos, planetas, galaxias y otros fenómenos astronómicos.
          </p>
          <p>
            Además, en la sección "APOD" de APIC-NASA, puedes seleccionar la
            fecha de una imagen específica que te interese ver. Simplemente
            elige la fecha deseada en el selector de fecha, presiona el botón
            'Buscar imagen' y la plataforma te mostrará la imagen
            correspondiente a ese día.
          </p>
          <p>
            Nuestra plataforma te permite acceder fácilmente a estas increíbles
            imágenes, verlas en detalle, guardar tus favoritas y aprender más
            sobre el universo que nos rodea.
          </p>
        </Modal.Body>
        <Modal.Footer className="ventana-modal">
          <Button variant="secondary" onClick={() => setModalAbierta(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BarraNavegacion;
