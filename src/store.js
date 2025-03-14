import { createStore, combineReducers } from 'redux';
import reducerFooter from './reducers/reducerFooter';
import reducerBoxProfileDisplay from './reducers/reducerBoxProfileDisplay';
import searchReducer from './reducers/reducerSearch';

const rootReducer = combineReducers({
    footer: reducerFooter,
    boxProfile:reducerBoxProfileDisplay,
    search: searchReducer,
});

const store = createStore(rootReducer);
export default store;