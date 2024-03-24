import React from "react";

const UserList = () => {
    const users = ['sergio', 'victoria', 'iván', 'liviu'];
  
    return (
      <div>
        <h2>Lista de Usuarios:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;