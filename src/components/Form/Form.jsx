import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //   searchMovies(query.toLowerCase());
    navigate(`/movies?query=${query.toLowerCase()}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;
