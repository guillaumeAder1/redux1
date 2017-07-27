import axios from 'axios';

export function getUsersList() {
	return function (dispatch) {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				dispatch({ type: 'RECEIVE_USERS', payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
			})
	}
}