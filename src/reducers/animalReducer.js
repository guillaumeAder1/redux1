
const defaultValues = {
	list: [],
	selected: false
}

const animalReducer = (state = defaultValues, action) => {
	switch (action.type) {
		case 'FETCH_ANIMALS':
			state = { ...state, list: action.payload.animals.animals }
			break;
		case 'SELECT_ANIMAL':
			state = { ...state, selected: action.payload }
			break;
		default:
			break;
	}
	return state;
}

export default animalReducer;