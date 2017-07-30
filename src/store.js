
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer.js';
import animalReducer from './reducers/animalReducer.js';
import bikesReducer from './reducers/bikesReducer.js';


const middleware = applyMiddleware(promise(), thunk, createLogger());
const reducers = combineReducers({
	user: userReducer,
	animal: animalReducer,
	bikesData: bikesReducer
});
export default createStore(reducers, middleware);
