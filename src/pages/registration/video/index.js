import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useFom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegistrationVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
      title: 'Standard video',
      url:'',
      category: 'Beginner',
  });
  return (
    <PageDefault>
      <h1>Registration video</h1>

      <form onSubmit={() => {

      }}>
        <FormField
          label="Video title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <Button type="submit">
          Register
        </Button>

      </form>

      <Link to="/registration/category">
        Category Registration
      </Link>
    </PageDefault>
  );
}

export default RegistrationVideo;

// 'to' on <Link  to > is a substituition of href.
