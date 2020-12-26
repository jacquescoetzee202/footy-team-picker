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