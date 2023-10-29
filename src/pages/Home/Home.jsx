import React, { useEffect, useState } from 'react';
import { getTrending } from 'components/api';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingFilms = () => {
      setLoading(true);

      getTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList films={films} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
