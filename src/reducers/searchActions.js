export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const setSearchValue = (value) => ({
    type: SET_SEARCH_VALUE,
    payload: value,
});

export const setSearchResults = (results) => ({
    type: SET_SEARCH_RESULTS,
    payload: results,
});