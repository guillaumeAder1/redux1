
const defaultValues = {
	list: [], // list of stations
	selectedCity: false,
	selectedStation: false,
	cities:[], // list of cities 
	error: false
}

const bikesReducer = (state = defaultValues, action) => {
	switch (action.type) {
		case 'SELECT_STATION':
			const coord = [action.payload.station.position.lng,action.payload.station.position.lat];
			state = { ...state, selectedStation:  coord };
			break;
		case 'FETCH_BIKES':
			state = { ...state, list: action.payload };
			break;
		case 'SELECT_CITY':
			state = { ...state, selectedCity: action.payload };
			break;
		case 'FETCH_BIKES_ERROR':
			state = { ...state, error: action.payload };
			break;
		case 'FETCH_CITIES':
			state = { ...state, cities: action.payload };
			break;
		case 'FETCH_CITIES_ERROR':
			state = { ...state, error: action.payload };
			break;
		default:
			break;
	}
	return state;
}

export default bikesReducer;