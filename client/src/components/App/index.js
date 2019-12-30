import React from 'react';
import { Provider } from 'react-redux';

import store from './../../store';

import GlobalStyle from './../../styles/global';

import Header from './../Header';
import MovieList from './../MovieList';
import Search from './../Search';

import { Wrapper, Intro } from './styles';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />

    <Wrapper>
      <Header />
      <Search />
      <Intro>Compartilhando alguns de nossos filmes favoritos</Intro>
      <MovieList />
    </Wrapper>
  </Provider>
);

export default App;
