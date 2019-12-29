import React from 'react';
import { Provider } from 'react-redux';

import store from './../../store';

import GlobalStyle from './../../styles/global';

import Header from './../Header';

import { Wrapper } from './styles';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />

    <Wrapper>
      <Header />
    </Wrapper>
  </Provider>
);

export default App;
