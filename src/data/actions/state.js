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

export const equalSort = () => (
    {
        type: "EQUAL_SORT",
    }
);

export const randomSort = () => (
    {
        type: "RANDOM_SORT",
    }
);

export const stateReset = () => (
    {
        type: "RESET",
    }
)

export const start = () => (
    {
        type: "START",
    }
)

export const updateNavStage = () => (
    {
        type: "NAV_UPDATE",
    }
)

export const navArrowInc = ( increment ) => (
    {
        type: "NAV_INCREMENT",
        increment: increment,
    }
)