import React from 'react';

import store from './store';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Header />
  </Provider>
);

export default App;
