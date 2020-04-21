import React from 'react';
import Routes from './routes';
import './Styles.css';
import {Provider} from 'react-redux';
import {store, persistor} from './pages/store/index';
import { PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <Routes/>
    </PersistGate>
    </Provider>
  );
}

export default App;
