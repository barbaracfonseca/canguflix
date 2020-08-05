const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://canguflix.herokuapp.com/categories';

export default {
  URL_BACKEND,
};
