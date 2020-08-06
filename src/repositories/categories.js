import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Unable to retrieve data :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Unable to retrieve data:(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
