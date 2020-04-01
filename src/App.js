import React from 'react';
import Routes from './routes';
import './Styles.css';
import {Provider} from 'react-redux';
import store from './pages/store/index';

function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;
