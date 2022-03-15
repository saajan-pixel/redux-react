import rootReducer from './Reducer/index';
import { createStore } from 'redux';

export const store = createStore(rootReducer);
