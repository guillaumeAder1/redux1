
const defaultValues = {
	list: [],
	selectedCity: false,
	selectedStation: false,
	error: false
}

const bikesReducer = (state = defaultValues, action) => {
	switch (action.type) {
		case 'SELECT_STATION':
			state = { ...state, selectedStation: [action.payload.station.position.lat,action.payload.station.position.lng]  }
			break;
		case 'FETCH_BIKES':
			state = { ...state, list: action.payload }
			break;
		case 'SELECT_CITY':
			state = { ...state, selectedCity: action.payload }
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