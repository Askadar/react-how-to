import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import todoReducer from './TodoApp/reducer'
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	combineReducers({todoReducer}),
	composer()
)

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
