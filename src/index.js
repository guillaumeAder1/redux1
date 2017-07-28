import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout.js';


import { Provider } from 'react-redux';
import store from './store.js';

//// ************ befoer splitting in files *******************
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
// import axios from 'axios';
// import thunk from 'redux-thunk';
// import userReducer from './userReducer.js'
// import animalReducer from './animalReducer.js'
// const reducers = combineReducers({
// 	user: userReducer,
// 	animal: animalReducer
// })
// const middleware = applyMiddleware(thunk, createLogger());
// const store = createStore(reducers, middleware);
// store.subscribe(() => {
// 	console.log('store changed', store.getState());
// })
// store.dispatch({ type: 'CHANGE_NAME', payload: 'Mark' });
// store.dispatch({ type: 'CHANGE_NAME', payload: 'Peter' });
// store.dispatch({ type: 'CHANGE_AGE', payload: 35 });
// store.dispatch({ type: 'CHANGE_AGE', payload: 5 });
// store.dispatch({ type: 'CHANGE_AGE', payload: 55 });
// store.dispatch({ type: 'CHANGE_AGE', payload: 3 });
// // async call
// store.dispatch((dispatch) => {
// 	dispatch({ type: 'FETCH_USERS_START' });
// 	axios.get('https://jsonplaceholder.typicode.com/users')
// 		.then((response) => {
// 			dispatch({ type: 'RECEIVE_USERS', payload: response.data })
// 		})
// 		.catch((err) => {
// 			dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
// 		})
// })
//// ************ befoer splitting in files *******************



ReactDOM.render(<Provider store={store}>
	<Layout appTitle='Shop' />
</Provider>, document.getElementById('root'));

	//https://www.youtube.com/watch?v=Td-2D-_7Y2E