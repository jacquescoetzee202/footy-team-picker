import initialState from "./initial";

import history from "../history";

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

const updateProgress = ( state ) => {
    return {
        ...state,
        progress: {
            team1: state.team1.name.length > 0,
            team2: state.team2.name.length > 0,
            players: state.players.length > 0,
        }
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
    
    let { team1, team2 } = eqaulTeams(players);

    return {
        ...state,
        players: players,
        team1: { ...state.team1, players: team1 },
        team2: { ...state.team2, players: team2 },
    }
}

const eqaulTeams = ( players ) => {
    let team1 = [];
    let team2 = [];
    let ranked = players.sort((a,b) => b.rating - a.rating );

    ranked.forEach(( player, index ) => {
        if (index % 2 === 0) {
            team1.push(player);
        } else {
            team2.push(player);
        }
    });

    return {
        team1: team1,
        team2: team2,
    }
}

const randomTeams = ( players ) => {
    let playersCopy = [...players];

    let team1 = [];
    let team2 = [];

    while ( playersCopy.length > 1 ){
        const random1 = Math.floor( Math.random() * playersCopy.length);

        team1.push(playersCopy.splice( random1 , 1 )[0]);

        const random2 = Math.floor( Math.random() * playersCopy.length);
        
        team2.push(playersCopy.splice( random2 , 1 )[0]);

    }

    return {
        team1: team1,
        team2: team2,
    }
}

const radomise = ( state ) => {

    let { players } = state;

    let randomised = randomTeams(players);

    let { team1, team2 } = randomised;

    return {
        ...state,
        team1: { ...state.team1, players: team1 },
        team2: { ...state.team2, players: team2 },
        randomSort: true,
    }
}

const equalise = ( state ) => {

    let { players } = state;

    let eqaulised = eqaulTeams(players);

    let { team1, team2 } = eqaulised;

    return {
        ...state,
        team1: { ...state.team1, players: team1 },
        team2: { ...state.team2, players: team2 },
        randomSort: false,
    }
}

const navUpdate = ( state ) => {
    
    let currentURL = history.location.pathname;

    let currentStage;

    if (currentURL === "/") {
        currentStage = 1;
    } 
    else if (currentURL === "/set-up/team1") {
        currentStage = 2;
    }
    else if (currentURL === "/set-up/team2") {
        currentStage = 3;
    }
    else if (currentURL === "/set-up/players") {
        currentStage = 4;
    }
    else if (currentURL === "/teams") {
        currentStage = 5;
    }

    console.log(currentURL);

    return {
        ...state,
        currentStage: currentStage,
    }
}

const reset = ( state ) => (
    {
        ...state,
    }
)

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "RESET":
            return navUpdate(reset({ ...initialState }));
        case "ADD_TEAM1":
            return navUpdate(updateProgress(addTeam1( state, action )));
        case "ADD_TEAM2":
            return navUpdate(updateProgress(addTeam2( state, action )));
        case "INCREMENT_PLAYER_NUM":
            return incPlayerQty( state, action );
        case "SAVE_PLAYERS":
            return navUpdate(updateProgress(addPlayers( state, action )));
        case "EQUAL_SORT":
            return equalise( state );
        case "RANDOM_SORT":
            return radomise( state );
        case "NAV_UPDATE":
            return navUpdate( state );
        case "START":
            return navUpdate( state );
        default:
            return state;
    }
};
export default reducer;