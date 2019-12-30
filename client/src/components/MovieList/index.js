import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRequest } from '../../store/ducks/movies';

import Movie from '../Movie';

import { Wrapper } from './styles';

const MovieList = () => {
  const movies = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      {movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </Wrapper>
  );
};

export default MovieList;
