
const initialFooter = {
    width: "",
    block_1: "",
    block_2: ""
};

const reducerFooter = (state = initialFooter, action) => {
    switch (action.type) {
        case 'UPDATE_FOOTER_WIDTH':
            return {
                ...state,
                width: action.payload.width,
                block_1: action.payload.block_1,
                block_2: action.payload.block_2
            };
        default:
            return state;
    }
};

export default reducerFooter;