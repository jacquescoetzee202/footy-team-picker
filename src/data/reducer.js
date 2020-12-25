import initialState from "./initial";

// Reducer helper functions

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "RESET":
            return { ...initialState };
        default:
            return state;
    }
};

export default reducer;