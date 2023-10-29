import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

export const MovieItem = styled.li`
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
