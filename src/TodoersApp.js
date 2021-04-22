import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';
import 'animate.css';

export const TodoersApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
