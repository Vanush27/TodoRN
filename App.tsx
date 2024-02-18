import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import ApplicationNavigator from './src/navigators/Application';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}
export default App;
