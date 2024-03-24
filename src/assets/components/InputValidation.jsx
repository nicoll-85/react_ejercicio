import React, { useState } from 'react';

const InputValidation = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value !== 'A tope con React') {
      setError('El texto introducido no es correcto');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <label htmlFor="textInput">Introduce el texto:</label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputValidation;
