
const defaultValues = {
	list: [], // list of stations
	selectedCity: false,
	selectedStation: false,
	cities: [], // list of cities 
	error: false,
	fetchingData: false
}

const bikesReducer = (state = defaultValues, action) => {
	switch (action.type) {
		case 'SELECT_STATION':
			const coord = [action.payload.station.position.lng, action.payload.station.position.lat];
			state = { ...state, selectedStation: coord };
			break;
		case 'FETCHING_BIKES_FULFILLED':
			state = { ...state, list: action.payload.data }
			break;
		case 'FETCHING_BIKES':
			state = { ...state, fetchingData: action.payload };
			break;
		case 'FETCHING_CITIES_FULFILLED':
			state = { ...state, cities: action.payload.data };
			break;
		case 'FETCHING_STATIONS':
			state = { ...state, fetchingData: true };
			break;
		case 'FETCHING_STATIONS_FULFILLED':
			state = { ...state, list: action.payload.data };
			break;



		default:
			break;
	}
	return state;
}

export default bikesReducer;