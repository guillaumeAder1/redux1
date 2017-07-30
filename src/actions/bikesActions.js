import axios from 'axios';

const APIkeyDublinBike = 'cd68da53009a674d943220ef0a67623682aa00ce';

export function getBikesList() {
	return dispatch => {
		return {
			type: 'FETCHING_BIKES',
			payload: axios.get('https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=' + APIkeyDublinBike)

		}
	}
}

export function getDataCities() {
	return dispatch => {
		return {
			type: 'FETCHING_CITIES',
			payload: axios.get('https://api.jcdecaux.com/vls/v1/contracts?apiKey=' + APIkeyDublinBike)
		}
	}
}

export function getStationsList(city) {
	return dispatch => {
		return {
			type: 'FETCHING_STATIONS',
			payload: axios.get('https://api.jcdecaux.com/vls/v1/stations?contract=' + city + '&apiKey=' + APIkeyDublinBike)
		}
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