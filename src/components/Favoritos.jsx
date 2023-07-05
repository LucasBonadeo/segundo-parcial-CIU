import { useState, useEffect } from "react";
import React from "react";
import CardFavoritos from "./CardFavoritos";
import { v4 as uuidv4 } from "uuid";
import "./components-style/favoritos.css";

const Favoritos = ({ actualizarEstado }) => {
  const [imagenesGuardadas, setImagenesGuardadas] = useState([]);

  useEffect(() => {
    const imagenesLocalStorage =
      JSON.parse(localStorage.getItem("imagenesGuardadas")) || [];
    setImagenesGuardadas(imagenesLocalStorage);
  }, [actualizarEstado]);

  const eliminarImagenLocalStorage = (index) => {
    const nuevasImagenes = [...imagenesGuardadas];
    nuevasImagenes.splice(index, 1);
    setImagenesGuardadas(nuevasImagenes);
    localStorage.setItem("imagenesGuardadas", JSON.stringify(nuevasImagenes));
  };

  return (
    <>
      <div
        className="contenedor-app d-flex flex-column justify-content-center align-items-center"
        id="favoritos"
      >
        <h4 className="subtitulo">Favoritos</h4>
        {imagenesGuardadas.length === 0 ? (
          <p className="favoritos-vacio">
            Aún no has agregado favoritos a tu lista.
          </p>
        ) : (
          <div className="contenedor-favoritos d-flex flex-row justify-content-center align-items-center">
            {imagenesGuardadas.map((imagen, index) => (
              <CardFavoritos
                key={uuidv4()}
                img={imagen.url}
                fechaSeleccionada={imagen.fecha}
                eliminarImagen={() => eliminarImagenLocalStorage(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favoritos;
