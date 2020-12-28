const SelectedTeam = ({ teamObj }) => {
    return (
        <div>
            <h1>{ teamObj.name }</h1>
            <p>{ teamObj.kit_color }</p>
            <ul>
                { teamObj.players.map(( player, index ) => (
                        <li key={ index }>
                            {player.name} { index === 0 && player.rating === 3 ? "⭐" : null } 
                        </li>
                ))}
            </ul>

        </div>
    )
}

export default SelectedTeam;