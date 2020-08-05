import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useFom';

function RegistrationCategory() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(inicialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://canguflix.herokuapp.com/categories';
      fetch(URL)
        .then(async (serverAnswer) => {
          if (serverAnswer.ok) {
            const answer = await serverAnswer.json();
            setCategories([
              ...answer,
            ]);
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

        clearForm();
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
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
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
