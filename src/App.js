import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

import './App.css'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o destaque
      let originals = list.filter(item => item.slug ==='originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='page'>

      <Header background={blackHeader} />

      { featureData &&
        <FeatureMovie item={featureData} /> 
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow 
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>

      <footer>
        Curso de React <span role="img" aria-label='foguete'>🚀</span><br/>
        Direitos de imagem para Netflix<br/>
        Dados consumidos da API Themoviedb.org
      </footer>

      { movieList.length <= 0 && 
        <div className='loading'>
            <img alt='Loading' src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' />
        </div>
      }
    </div>
  );
}

export default App;
