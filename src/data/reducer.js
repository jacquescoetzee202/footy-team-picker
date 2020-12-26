import initialState from "./initial";

// Reducer helper functions
const addTeam1 = ( state, action ) => {
    return {
        ...state,
        team1: {
            name: action.data.name,
            kit_color: action.data.color,
        },
    }
}

const addTeam2 = ( state, action ) => {
    return {
        ...state,
        team2: {
            name: action.data.name,
            kit_color: action.data.color,
        },
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "RESET":
            return { ...initialState };
        case "ADD_TEAM1":
            return addTeam1( state, action );
        case "ADD_TEAM2":
            return addTeam2( state, action );
        default:
            return state;
    }
};
export default reducer;