import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from 'components/App';

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { SocketProvider } from 'contexts/Socket';

import Loading from "components/shared/Loading";

ReactDOM.render(
  <Router>
    <SocketProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </SocketProvider>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();