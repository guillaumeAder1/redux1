import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import userReducer from './userReducer.js'
import animalReducer from './animalReducer.js'
import './index.css';

const reducers = combineReducers({
	user: userReducer,
	animal: animalReducer
})

const store = createStore(reducers);


store.subscribe(() => {
	console.log('store changed', store.getState())
})


store.dispatch({ type: 'CHANGE_NAME', payload: 'Mark' });
store.dispatch({ type: 'CHANGE_AGE', payload: 35 });


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