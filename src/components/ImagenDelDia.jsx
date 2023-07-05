import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./components-style/imagenDelDia.css";

const ImagenDelDia = ({ fechaSeleccionada, setActualizarEstado }) => {
  const [resNasa, setResNasa] = useState({
    url: "https://apod.nasa.gov/apod/image/2304/Ring_HubbleSchmidt_960.jpg",
    explanation: "Esperando selección de fecha...",
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const apiKey = "Q3m5vFZIKlVbf5VBfUpTgixFMRj8IPSMhgqxpBJh";

  const consultarANasa = async () => {
    try {
      const api = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fechaSeleccionada}`
      );
      if (api.ok) {
        const res = await api.json();
        setResNasa(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const guardarImagen = () => {
    const data = {
      fecha: fechaSeleccionada,
      url: resNasa.url,
    };

    const imagenesGuardadas =
      JSON.parse(localStorage.getItem("imagenesGuardadas")) || [];

    imagenesGuardadas.push(data);

    localStorage.setItem(
      "imagenesGuardadas",
      JSON.stringify(imagenesGuardadas)
    );
    setActualizarEstado(Date.now());
    setMostrarModal(true);
  };

  const handleCloseModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="contenedor-imagen-de-dia">
      <Button variant="light" onClick={() => consultarANasa()}>
        Buscar Imagen
      </Button>
      <div>
        <div className="contenedor-imagen-api">
          <img
            src={resNasa.url}
            className="image img-fluid"
            alt="Imagen del dia de la NASA"
          />
        </div>
      </div>
      <div>
        <div className="contenedor-texto">
          <p>{resNasa.explanation}</p>
        </div>
      </div>
      <div>
        <Button variant="light" onClick={guardarImagen}>
          Guardar Imagen
        </Button>
        <Button variant="secondary">
          <a href={resNasa.url} target="_blank" rel="noreferrer">
            Ver Imagen Completa
          </a>
        </Button>
      </div>
      <Modal show={mostrarModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className="ventana-modal">
          <Modal.Title>Imagen Guardada</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ventana-modal">
          La imagen ha sido guardada exitosamente en Favoritos
        </Modal.Body>
        <Modal.Footer className="ventana-modal">
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImagenDelDia;
