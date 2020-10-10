import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser } from './modules/auth';
import client from './lib/api/client';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadAuth() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    const { nickname, accessToken, tokenType } = JSON.parse(user);
    store.dispatch(tempSetUser({ nickname, accessToken, tokenType }));
    client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;
    console.log(client.defaults.headers.Authorization);
  } catch (e) {
    console.log('loadAuth() 오류');
  }
}

sagaMiddleware.run(rootSaga);
loadAuth();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
