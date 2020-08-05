import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [inicialData, setInicialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInicialData(categoriesWithVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);
  // http://localhost:8080/categories?_embed=videos

  return (
    <PageDefault paddingAll={0}>

      {inicialData.length === 0 && (<div>Loading...</div>)}

      {inicialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={inicialData[0].videos[0].title}
                url={inicialData[0].videos[0].url}
                videoDescription="Do you have any difficulties with learning English? This is your time to improve that!"
              />
              <Carousel
                ignoreFirstVideo
                category={inicialData[0]}
              />
            </div>
          );
        } // retorn with id 0 here all the rest is with the command below.
        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
