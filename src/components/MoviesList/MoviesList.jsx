import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MoviesListContainer,
  MovieItem,
  StyledLink,
} from './MoviesList.styled';

const MoviesList = ({ films, query }) => {
  const location = useLocation();
  //   console.log(location);

  return (
    <MoviesListContainer>
      {films.map(film => (
        <MovieItem key={film.id}>
          <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </StyledLink>
        </MovieItem>
      ))}
    </MoviesListContainer>
  );
};

export default MoviesList;
