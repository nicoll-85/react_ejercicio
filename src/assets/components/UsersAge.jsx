import React from "react";

const UsersAge = () => {
    const users = [
      { name: 'Sergio', age: 28 },
      { name: 'Victoria', age: 27 },
      { name: 'Iván', age: 30 },
      { name: 'Liviu', age: 26 }
    ];
  
    return (
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age} años
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UsersAge;