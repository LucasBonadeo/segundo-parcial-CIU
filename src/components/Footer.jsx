import React from "react";
import "./components-style/footer.css";
import twitter from "../assets/img/twitter-logo-white-24.png";
import facebook from "../assets/img/facebook-circle-logo-white-24.png";
import intagram from "../assets/img/instagram-logo-white-24.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container fluid className="contenedor-principal-footer">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="redes-sociales">REDES SOCIALES</h4>
          <div className="d-flex justify-content-center align-items-center">
            <a
              href="https://www.instagram.com/nasa/?next=%2Flajedet%2F&hl=es"
              target="_blank"
              rel="noreferrer"
              className="link-redes-sociales"
            >
              <img src={intagram} alt="" />
            </a>
            <a
              href="https://www.facebook.com/NASAes/?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              className="link-redes-sociales"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://twitter.com/NASA"
              target="_blank"
              rel="noreferrer"
              className="link-redes-sociales"
            >
              <img src={twitter} alt="" />
            </a>
          </div>
          <p className="ciu">
            Construccion de Interfaces de Usuario 2023 - Segundo Parcial
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
