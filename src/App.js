import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SeleccionadorDeFecha from "./components/SeleccionadorDeFecha";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagenDelDia from "./components/ImagenDelDia";
import Favoritos from "./components/Favoritos";

function App() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [actualizarEstado, setActualizarEstado] = useState([]);

  const handleFechaSeleccionada = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  return (
    <>
      <Header titulo={"APIC-NASA"} />
      <div className="contenedor-app d-flex flex-column justify-content-center align-items-center">
        <h2 className="subtitulo" id="day-pic">
          DAY-PIC
        </h2>
        <SeleccionadorDeFecha onFechaSeleccionada={handleFechaSeleccionada} />
        <ImagenDelDia
          fechaSeleccionada={fechaSeleccionada}
          setActualizarEstado={setActualizarEstado}
        />
      </div>
      <Favoritos actualizarEstado={actualizarEstado} />
      <Footer />
    </>
  );
}

export default App;
