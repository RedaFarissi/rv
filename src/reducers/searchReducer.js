import { SET_SEARCH_VALUE, SET_SEARCH_RESULTS } from './searchActions';

const initialState = {
    searchValue: '',
    searchResults: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;