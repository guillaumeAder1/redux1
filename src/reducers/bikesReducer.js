
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
			const station = {
				coord: [action.payload.station.position.lng, action.payload.station.position.lat],
				station: action.payload.station
			}
			state = { ...state, selectedStation: station };
			break;
		// 
		case 'FETCHING_BIKES_REJECTED':
			state = { ...state, error: action.payload }
			break;
		case 'FETCHING_BIKES_PENDING':
			state = { ...state, fetchingData: true }
			break;
		case 'FETCHING_BIKES_FULFILLED':
			state = { ...state, list: action.payload.data, fetchingData: false }
			break;
		case 'FETCHING_BIKES':
			state = { ...state };
			break;
		// 
		case 'FETCHING_CITIES_PENDING':
			state = { ...state, fetchingData: true }
			break;
		case 'FETCHING_CITIES_FULFILLED':
			state = { ...state, cities: action.payload.data, fetchingData: false };
			break;
		case 'FETCHING_CITIES_REJECTED':
			state = { ...state, error: action.payload };
			break;
		//
		case 'FETCHING_STATIONS_PENDING':
			state = { ...state, fetchingData: true }
			break;
		case 'FETCHING_STATIONS':
			state = { ...state, fetchingData: true, selectedCity: action.payload.station };
			break;
		case 'FETCHING_STATIONS_FULFILLED':
			state = { ...state, list: action.payload.data, fetchingData: false };
			break;
		case 'FETCHING_STATIONS_REJECTED':
			state = { ...state, error: action.payload };
			break;
		default:
			break;
	}
	return state;
}

export default bikesReducer;