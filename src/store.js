
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer.js';
import animalReducer from './reducers/animalReducer.js';


const middleware = applyMiddleware(thunk, createLogger());
const reducers = combineReducers({
	user: userReducer,
	animal: animalReducer
});
export default createStore(reducers, middleware);
