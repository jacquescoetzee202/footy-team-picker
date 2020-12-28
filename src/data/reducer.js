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

const incPlayerQty = ( state, action ) => {
    let { increment } = action;
    let { playerQty } = state;
    let next = playerQty + increment;

    if (next < 2) {
        return {
            ...state,
        }

    } else if (next > 22){
        return {
            ...state,
        }

    } else {
        return {
            ...state,
            playerQty: state.playerQty + action.increment,
        }
        
    }
}

const addPlayers = ( state, { players } ) => {
    console.log( players );
    return {
        ...state,
        players: players,
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
        case "INCREMENT_PLAYER_NUM":
            return incPlayerQty( state, action );
        case "SAVE_PLAYERS":
            return addPlayers( state, action );
        default:
            return state;
    }
};
export default reducer;