import React from "react";
import "./components-style/header.css";
import Container from "react-bootstrap/Container";
import videoTierra from "../assets/img/Earth_Background.mp4";
import BarraNavegacion from "./BarraNavegacion";

const Header = ({ titulo }) => {
  return (
    <>
      <BarraNavegacion />
      <Container className="contenedor-imagen">
        <div id="container" className="video-container">
          <video class="video-background" autoPlay loop muted>
            <source src={videoTierra} type="video/mp4" />
          </video>
          <h1 className="display-1 titulo">{titulo}</h1>
        </div>
      </Container>
    </>
  );
};

export default Header;
