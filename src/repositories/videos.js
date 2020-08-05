import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;
// here is a creation of data
function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST', // send data to the server
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject), // the informations came type text.
  })
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Unable to retrieve data :(');
    });
}

export default {
  create,
};
