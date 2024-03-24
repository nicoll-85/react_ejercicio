import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    description: '',
    gender: 'male',
    age: '',
    country: 'Spain',
    province: 'Guadalajara',
    hobbies: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);
      setFormData((prevData) => ({
        ...prevData,
        hobbies: updatedHobbies
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="firstname">Firstname:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />{' '}
          Female
        </label>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="Spain">Spain</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div>
        <label htmlFor="province">Province:</label>
        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
        >
          {formData.country === 'Spain' ? (
            <>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Madrid">Madrid</option>
            </>
          ) : (
            <option value="NA">Not Applicable</option>
          )}
        </select>
      </div>
      <div>
        <label>Hobbies:</label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Football"
            checked={formData.hobbies.includes('Football')}
            onChange={handleChange}
          />{' '}
          Football
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Basketball"
            checked={formData.hobbies.includes('Basketball')}
            onChange={handleChange}
          />{' '}
          Basketball
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Art"
            checked={formData.hobbies.includes('Art')}
            onChange={handleChange}
          />{' '}
          Art
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
