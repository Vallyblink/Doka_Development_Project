import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<PersistGate persistor={persistor}>
  <Provider store={store}>
    <BrowserRouter basename='/mira.rent'>
     <App />
    </BrowserRouter>
  </Provider>
</PersistGate>
</>
)
  
