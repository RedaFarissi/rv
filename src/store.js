import { createStore, combineReducers } from 'redux';
import reducerFooter from './reducers/reducerFooter';
import reducerBoxProfileDisplay from './reducers/reducerBoxProfileDisplay';

const rootReducer = combineReducers({
    footer: reducerFooter,
    boxProfile:reducerBoxProfileDisplay,
});

const store = createStore(rootReducer);
export default store;