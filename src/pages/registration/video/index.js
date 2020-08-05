import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useFom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegistrationVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: 'Standard video',
    url: 'https://www.youtube.com/watch?v=AaRhgWg2R4o',
    category: 'Beginner',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Registration video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const chooseCategory = categories.find((category) => category.title === values.category);

        videosRepository.create({ // create data
          title: values.title,
          url: values.url,
          categoryId: chooseCategory.id,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Sucessfull registration!');
            history.push('/');
          });
      }}
      >
        <FormField // Form of the video title
          label="Video title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField // form of the url on the video registration page.
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Register
        </Button>
      </form>

      <br />
      <br />

      <Link to="/registration/category">
        Category Registration
      </Link>
    </PageDefault>
  );
}

export default RegistrationVideo;

// 'to' on <Link  to > is a substituition of href.
