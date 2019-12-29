import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRequest } from '../../store/ducks/movies';

import { Wrapper } from './styles';

const MovieList = () => {
  const movies = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  return (
    <Wrapper>
      {movies.map(movie => (
        <Movie movie={movie} />
      ))}
    </Wrapper>
  );
};

export default MovieList;
