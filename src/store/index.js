import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const configureStore = initialState => {
	const store = createStore(reducer, initialState, middleware);
	console.log('initialState: ', store)
	return store;
};

export default configureStore;