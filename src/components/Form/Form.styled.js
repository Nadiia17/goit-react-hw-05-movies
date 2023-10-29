import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 300px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003366;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
