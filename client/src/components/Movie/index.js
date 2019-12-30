import React from 'react';

import { Wrapper, Thumbnail, Title } from './styles';

const Movie = ({ movie }) => (
  <Wrapper>
    <Title>{movie.title}</Title>
    <Thumbnail src={movie.thumbnail} />
    <p>{movie.year}</p>
  </Wrapper>
);

export default Movie;
