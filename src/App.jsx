import { useState } from 'react';
import Button from './assets/components/Button';
import ButtonLikes from './assets/components/ButtonLikes';
import Users from './assets/components/Users';
import UserList from './assets/components/UserList';
import UsersAge from './assets/components/UsersAge';
import Select from './assets/components/Select';
import InputValidation from './assets/components/InputValidation';
import FetchData from './assets/components/FetchData';
import PasswordChecker from './assets/components/PasswordChecker';
import Form from './assets/components/Form';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
    { value: '3', label: 'Opción 3' }
  ];

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };


  return (
    <>
      <h1>Este es el Ejercicio 2 básico</h1>
      <hr />
      <Button></Button>
      <hr />
      <ButtonLikes></ButtonLikes>
      <hr />
      <h2>Lista de Usuarios con console.log</h2>
      <Users></Users>
      <hr />
      <UserList></UserList>
      <hr />
      <h2>Lista de Usuarios con Edad</h2>
      <UsersAge></UsersAge>
      <hr />
      <h2>Componente Select</h2>
      <Select value={selectedValue} items={options} onChange={handleSelectChange} />
      <p>Seleccionado: {selectedValue}</p>
      <hr />
      <h2>Input con validación de Error</h2>
      <InputValidation></InputValidation>
      <hr />
      <FetchData></FetchData>
      <hr />
      <PasswordChecker></PasswordChecker>
      <hr />
      <h2>Formulario del Usuario</h2>
      <Form></Form>
    </>
  )
}

export default App
