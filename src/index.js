import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/ReduxStore';
import { Provider } from 'react-redux';

console.log(store)


const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App appState={store} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>
  );

reportWebVitals();

