import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

  img {
    border-radius: 10px;
    overflow: hidden;
  }

  div {
    flex-grow: 1;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListInfo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  color: #3498db;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    background-color: #2471a3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
