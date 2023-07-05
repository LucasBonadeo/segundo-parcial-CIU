import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./components-style/cardFavoritos.css";

const CardFavoritos = ({ img, fechaSeleccionada, eliminarImagen }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="d-flex flex-column justify-content-center align-items-center float"
    >
      <div className="contenedor-imagen-favoritos">
        <Card.Img variant="top" src={img} className="img-card-favoritos" />
      </div>
      <Card.Body>
        <Card.Title className="text-light">
          FECHA <br />
          {fechaSeleccionada}
        </Card.Title>
        <Card.Text></Card.Text>
        <Button variant="danger" onClick={eliminarImagen}>
          Eliminar
        </Button>
        <Button variant="secondary">
          <a href={img} target="_blank" rel="noreferrer">
            Ver Imagen Completa
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardFavoritos;
