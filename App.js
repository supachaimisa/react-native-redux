/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {Provider} from 'react-redux';
import Form from './src/components/form/form'
import List from './src/components/list/list'
import store from './src/store/store';
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Form/>
      <List/>
    </Provider>
  );
};


export default App;
