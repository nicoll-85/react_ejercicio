import React, { useState, useEffect } from 'react';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo]);

  const handleInicio = () => {
    setSegundos(0);
    setActivo(true);
  };

  const handleDetener = () => {
    setActivo(false);
  };

  return (
    <div>
      <h2>Cronómetro</h2>
      <p>{segundos} segundos</p>
      <button onClick={handleInicio}>Iniciar</button>
      <button onClick={handleDetener}>Detener</button>
    </div>
  );
};

export default Cronometro;
