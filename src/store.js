import { createStore, combineReducers } from 'redux';
import reducerFooter from './reducers/reducerFooter';

const rootReducer = combineReducers({
    footer: reducerFooter ,
});

const store = createStore(reducerFooter);
export default store;