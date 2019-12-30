import React from 'react';

import { Wrapper, Thumbnail, Title, Year } from './styles';

const Movie = ({ movie }) => (
  <Wrapper>
    <Title>{movie.title}</Title>
    <Thumbnail src={movie.thumbnail} />
    <Year>{movie.year}</Year>
  </Wrapper>
);

export default Movie;
