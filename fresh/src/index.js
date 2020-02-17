import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { Provider } from 'react-redux'

let store = createStore(reducer,applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
