import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Theme } from '@material-ui/core';

import { create } from './theme/index';
import './styles/index.scss';
import history from './utils/history';

import MainRouter from './MainRouter';
import { store } from './configureStore';

const theme: Theme = create();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MainRouter />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
