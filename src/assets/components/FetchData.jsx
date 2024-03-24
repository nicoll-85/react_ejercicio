import React, { useState } from 'react';

const FetchData = () => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Datos JSON:</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Cargando...' : 'Obtener Datos'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {jsonData && (
        <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px',color:'black' }}>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default FetchData;
