
import React from 'react';
import ReactDOM from 'react-dom'; import App from './App';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));



// const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(
  // rootReducer, 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

