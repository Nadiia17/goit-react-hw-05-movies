import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Form from 'components/Form/Form';
import { searchByQuery } from 'components/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const navigate = useNavigate();

  const searchMovies = query => {
    navigate(`/movies?query=${query}`);
  };

  //   const searchMovies = queryMovie => {
  //     setLoading(true);

  //     searchByQuery(queryMovie)
  //       .then(searchResults => {
  //         setSearchFilms(searchResults);
  //         setNoMoviesText(searchResults.length === 0);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setLoading(true);
      searchByQuery(query)
        .then(searchResults => {
          setSearchFilms(searchResults);
          setNoMoviesText(searchResults.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <MoviesList films={searchFilms} />}
    </main>
  );
};
export default Movies;
