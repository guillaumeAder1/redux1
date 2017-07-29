import axios from 'axios';

const APIkeyDublinBike = 'cd68da53009a674d943220ef0a67623682aa00ce';

export function getBikesList() {
	return function (dispatch) {
		axios.get('https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=' + APIkeyDublinBike)
			.then((response) => {
				dispatch({ type: 'FETCH_BIKES', payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: 'FETCH_BIKES_ERROR', payload: err })
			});
	}
}

export function getDataCity(city) {
	return function (dispatch) {
		axios.get('https://api.jcdecaux.com/vls/v1/stations?contract=' + city + '&apiKey=' + APIkeyDublinBike)
			.then((response) => {
				dispatch({ type: 'FETCH_BIKES', payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: 'FETCH_BIKES_ERROR', payload: err })
			});
	}
}

export function getStationsList() {
	return function (dispatch) {
		axios.get('https://api.jcdecaux.com/vls/v1/contracts?apiKey=' + APIkeyDublinBike)
			.then((response) => {
				dispatch({ type: 'FETCH_CITIES', payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: 'FETCH_CITIES_ERROR', payload: err })
			});
	}
}
export function selectStation(station) {
	return {
		type: 'SELECT_STATION',
		payload: {
			station: station
		}
	};
}