const initialMessageState = {
    title: '',
    result: []
};

const searchReducer = (state = initialMessageState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE_SEARCH':
            return {...state, title: action.payload };
        case 'SEARCH_RESULT':
            return {...state, result: action.payload };
        default:
            return state;
    }
};
  
export default searchReducer;