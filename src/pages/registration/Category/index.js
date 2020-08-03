import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegistrationCategory() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(inicialValues);
  // categoryName, setCategoryName

  function setVal(key, val) {
    // key: name, description,..
    setValues({
      ...values,
      [key]: val, // name:'value'
    });
  }

  function handleChange(infoEvent) {
    setVal(
      infoEvent.target.getAttribute('name'),
      infoEvent.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL)
        .then(async (serverAnswer) => {
          if (serverAnswer.ok) {
            const answer = await serverAnswer.json();
            setCategories(answer);
            return;
          }
          throw new Error('Unable to retrieve data');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Registration Category:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(infoEvent) {
        infoEvent.preventDefault();
        // console.log('Did you try to send a form?')
        setCategories([
          ...categories,
          values,
        ]);

        setValues(inicialValues);
      }}
      >
        {/* State */}

        <FormField
          label="Category Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Register
        </Button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        back to home
      </Link>
    </PageDefault>
  );
}

export default RegistrationCategory;
