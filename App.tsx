import React from 'react';

import {Navigation} from './src/navigators';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {AppStateProvider} from 'context/AppState/AppStateProvider';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppStateProvider>
        <Navigation />
      </AppStateProvider>
    </Provider>
  );
};

export default App;
