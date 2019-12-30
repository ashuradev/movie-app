import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchRequest } from '../../store/ducks/movies';

import { Wrapper, Input } from './styles';

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(fetchRequest(e.target.value));

  return (
    <Wrapper>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Digite aqui para pesquisar..."
      />
    </Wrapper>
  );
};

export default Search;
