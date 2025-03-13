
const initialIsVisibleProfile = {
    isVisibleProfile: false
};

const reducerBoxProfileDisplay = (state = initialIsVisibleProfile, action) => {
    switch (action.type) {
        case 'TOGGLE_VISIBILTY_PROFILE':
            return {
                isVisibleProfile: !state.isVisibleProfile
            };
        case 'FALSE_VISIBILTY_PROFILE':
            return {
                isVisibleProfile: false
            };
        default:
            return state;
    }
};

export default reducerBoxProfileDisplay;