import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import userReducer from './userReducer.js'
import animalReducer from './animalReducer.js'
import './index.css';

const reducers = combineReducers({
	user: userReducer,
	animal: animalReducer
})


const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, middleware);


store.subscribe(() => {
	console.log('store changed', store.getState());
})


store.dispatch({ type: 'CHANGE_NAME', payload: 'Mark' });
store.dispatch({ type: 'CHANGE_NAME', payload: 'Peter' });
store.dispatch({ type: 'CHANGE_AGE', payload: 35 });
store.dispatch({ type: 'CHANGE_AGE', payload: 5 });
store.dispatch({ type: 'CHANGE_AGE', payload: 55 });
store.dispatch({ type: 'CHANGE_AGE', payload: 3 });
// store.dispatch({ type: 'ERROR' });
// async call
store.dispatch((dispatch) => {
	dispatch({ type: 'FETCH_USERS_START' });
	axios.get('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			dispatch({ type: 'RECEIVE_USERS', payload: response.data })
		})
		.catch((err) => {
			dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
		})
})


class App extends React.Component {
	render() {
		return (
			<div>
				<h1>App</h1>
			</div>
		)
	}
}

ReactDOM.render(
	<App user='toto' />, document.getElementById('root'));

	//https://www.youtube.com/watch?v=Td-2D-_7Y2E