import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <>
  );
}

export default MovieList;