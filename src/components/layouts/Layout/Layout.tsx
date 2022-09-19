// maybe i'll need these

// import {ThemeProvider} from 'styled-components';
// import {GlobalStyle, theme} from '../../../styles';
// import {PersistGate} from 'redux-persist/lib/integration/react';

import {Provider} from 'react-redux';
import {Container} from '../Container';
import React from 'react';

import store from '../../../store/store';
import {NavigationContainer} from '@react-navigation/native';
import {PropsWithChildren} from 'react';

const Layout = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Container>{children}</Container>
      </Provider>
    </NavigationContainer>
  );
};

export default Layout;
