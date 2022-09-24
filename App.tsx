import {Navigation} from './src/screens';

import {Provider} from 'react-redux';

import React from 'react';

import store from './src/store/store';

import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
