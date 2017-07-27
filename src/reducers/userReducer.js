
const initialState = {
	fetching: false,
	fetched: false,
	error: false,
	users: [],
	selected: {}
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_USERS_START':
			state = { ...state, fetching: true }
			break;
		case 'FETCH_USERS_ERROR':
			state = { ...state, error: action.payload }
			break;
		case 'RECEIVE_USERS':
			state = { ...state, users: action.payload, fetching: false, fectched: false }
			break;
		case 'CHANGE_NAME':
			state = { ...state, selected: action.payload }

			break;
		case 'CHANGE_AGE':
			state = { ...state, selected: action.payload }
			break;
		case 'ERROR':
			console.warn('Reducer TYPE == ERROR ');
			break;
		default:
			break;
	}

	return state;
}

export default userReducer;