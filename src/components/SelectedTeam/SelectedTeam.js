import KitFill from "../KitFill";

const SelectedTeam = ({ teamObj }) => {
    return (
        <div className="card__sub selected-team">
            <h2 className="selected-team__name">{ teamObj.name }</h2>
            <KitFill 
                color={ teamObj.kit_color }
                css="selected-team__kit"
            />
            <hr className="selected-team__line"/>
            <ul className="selected-team__list">
                { !teamObj.name ? null : teamObj.players.map(( player, index ) => (
                        <li 
                            className="selected-team__list__player"
                            key={ index }
                        >
                            <span className="selected-team__list__player__name">{player.name}</span>
                            <span className="selected-team__list__player__rating">{ "⭐".repeat(player.rating)}</span>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default SelectedTeam;