
const defaultValues = {
	list: [],
	selected: false,
	error: false
}

const bikesReducer = (state = defaultValues, action) => {
	switch (action.type) {
		case 'FETCH_BIKES':
			state = { ...state, list: action.payload }
			break;
		case 'SELECT_CITY':
			state = { ...state, selected: action.payload }
			break;
		case 'FETCH_BIKES_ERROR':
			state = { ...state, error: action.payload }
			break;
		default:
			break;
	}
	return state;
}

export default bikesReducer;