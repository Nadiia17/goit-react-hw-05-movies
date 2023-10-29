import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTrending } from 'components/api';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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

      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link
              to={{ pathname: `/movies/${film.id}`, state: { from: location } }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>

      {loading && <Loader />}
    </main>
  );
};

export default Home;
