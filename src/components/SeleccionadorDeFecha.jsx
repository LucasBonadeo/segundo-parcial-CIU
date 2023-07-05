import React, { useState } from "react";
import "./components-style/fechaSeleccionada.css";

const SeleccionadorDeFecha = ({ onFechaSeleccionada }) => {
  const [fecha, setFecha] = useState("");

  const handleFechaChange = (e) => {
    const fechaSeleccionada = e.target.value;

    const fechaActual = new Date().toISOString().split("T")[0];

    if (fechaSeleccionada <= fechaActual) {
      setFecha(fechaSeleccionada);
      onFechaSeleccionada(fechaSeleccionada);
    } else {
      window.alert("No puedes seleccionar una fecha futura");
    }
  };

  return (
    <div className="contenedor-fecha-seleccionada">
      <h4 className="display-6">Fecha Seleccionada : {fecha}</h4>
      <input type="date" onChange={handleFechaChange} />
    </div>
  );
};

export default SeleccionadorDeFecha;
