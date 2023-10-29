import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MoviesListContainer,
  MovieItem,
  StyledLink,
} from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      {films.map(film => (
        <MovieItem key={film.id}>
          <StyledLink
            to={{
              pathname: `/movies/${film.id}`,
              state: { from: location },
            }}
          >
            {film.title}
          </StyledLink>
        </MovieItem>
      ))}
    </MoviesListContainer>
  );
};

export default MoviesList;
