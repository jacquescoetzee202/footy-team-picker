export const addTeam = ( data, teamNum ) => {

    if ( teamNum === 1 ) {
        return {
            type:"ADD_TEAM1",
            data: data,
        }
    }

    if ( teamNum === 2 ) {
        return {
            type:"ADD_TEAM2",
            data: data,
        }
    }
}

export const incrementPlayerNum = ( increment ) => (
    {
        type: "INCREMENT_PLAYER_NUM",
        increment: increment,
    }
);

export const savePlayers = ( data ) => (
    {
        type: "SAVE_PLAYERS",
        players: data,
    }
);

export const toggleSort = () => (
    {
        type: "TOGGLE_SORT",
    }
);