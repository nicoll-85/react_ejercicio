import React,{useState, useEffect} from "react";

const Users = () => {
    const [users, setUsers] = useState(['Nadia', 'Dante']);
  
    useEffect(() => {
      console.log('Componente montado');
      setUsers(prevUsers => [...prevUsers, 'Alice']);
  
      return () => {
        console.log('¡Componente destruido!');
      };
    }, []);
  
    return (
      <div>
        <h4>Usuarios:</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Users;