import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';

const userReducer = function (state, action) {
	if (action.type === 'INC') {
		const newState = Object.assign({}, state, { user: { age: state.user.age + action.payload } })
		return newState;
	} else if (action.type === 'DEC') {
		const newState = Object.assign({}, state, { user: { age: state.user.age - action.payload } })
		return newState;
	}
	return state;
}

const store = createStore(userReducer, {
	user: {
		name: 'jo',
		age: 56
	},
	animal: {
		name: 'skye',
		type: 'dog'
	}
})


store.subscribe(() => {
	console.log('store changed', store.getState())
})


store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 11 });
store.dispatch({ type: 'INC', payload: 5 });
store.dispatch({ type: 'DEC', payload: 10 });

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