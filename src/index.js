import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './userReducer.js'
import animalReducer from './animalReducer.js'
import './index.css';

const reducers = combineReducers({
	user: userReducer,
	animal: animalReducer
})
// curried function
const logger = (store) => (next) => (action) => {
	console.log('action', action)
	// if change action type, then the next dispatch will call CHANGE_NAME instead of AGE
	action.type = 'CHANGE_NAME';
	next(action)
}

const error = (store) => (next) => (action) => {
	// try {
	// 	next(action);
	// } catch (e) {
	// 	console.log('error::', e)
	// }

}


const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, {}, middleware);


store.subscribe(() => {
	console.log('store changed', store.getState());
})


store.dispatch({ type: 'CHANGE_NAME', payload: 'Mark' });
store.dispatch({ type: 'CHANGE_NAME', payload: 'Peter' });
store.dispatch({ type: 'CHANGE_AGE', payload: 35 });
store.dispatch({ type: 'CHANGE_AGE', payload: 5 });
store.dispatch({ type: 'CHANGE_AGE', payload: 55 });
store.dispatch({ type: 'CHANGE_AGE', payload: 3 });
store.dispatch({ type: 'ERROR' });


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