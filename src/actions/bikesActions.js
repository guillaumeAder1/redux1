import axios from 'axios';

export function getBikesList() {
	const APIkeyDublinBike = 'cd68da53009a674d943220ef0a67623682aa00ce';
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