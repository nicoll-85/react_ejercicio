import React, { useState } from 'react';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (value) => {
    let points = 0;

    if (value.length >= 8) {
      points++;
    }

    if (/\d/.test(value)) {
      points++;
    }

    if (/[A-Z]/.test(value)) {
      points++;
    }

    if (/[ $%&/()+\-:]/.test(value)) {
      points++;
    }

    if (points === 1) {
      setStrength('Débil');
    } else if (points === 2 || points === 3) {
      setStrength('Normal');
    } else if (points === 4) {
      setStrength('Fuerte');
    } else {
      setStrength('');
    }
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
    checkStrength(e.target.value);
  };

  return (
    <div>
      <h2>La contraseña debe tener:</h2>
      <ul>
        <li>8 caractéres</li>
        <li>Al menos un número</li>
        <li>Alguna letra en mayúscula</li>
        <li>Alguno de estos símbolos: $ % & / ( ) + -</li>
      </ul>
      <input
        type="password"
        placeholder="Introduce tu contraseña"
        value={password}
        onChange={handleInputChange}
      />
      {strength && <p>Fortaleza: {strength}</p>}
    </div>
  );
};

export default PasswordChecker;
