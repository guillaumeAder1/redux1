import animalsData from '../jsonData/animal.json';

export function getAnimalsList() {
	return {
		type: 'FETCH_ANIMALS',
		payload: {
			animals: animalsData
		}
	};
}