import history from "../../history";

const linkClick = (event) => {
    let route = event.currentTarget.dataset.route;
    history.push( route );
}

const NavProgress = ({ progress }) => {
    return (
        <ul className="nav-list">
            <li className="nav-list__item">
                <button
                    className="nav-list__item__button" 
                    onClick={ linkClick }
                    data-route="/"
                >Home</button>
            </li>
            <li className="nav-list__item">
                <button
                    className="nav-list__item__button" 
                    onClick={ linkClick }
                    data-route="/set-up/team1"
                >team 1</button>
            </li>
            <li className="nav-list__item">
                <button
                    className="nav-list__item__button" 
                    onClick={ linkClick }
                    data-route="/set-up/team2"
                    disabled={ !progress.team1 }
                >team 2</button>
            </li>
            <li className="nav-list__item">
                <button
                    className="nav-list__item__button" 
                    onClick={ linkClick }
                    data-route="/set-up/players"
                    disabled={ !progress.team2 }
                >players</button>
            </li>
            <li className="nav-list__item">
                <button
                    className="nav-list__item__button" 
                    onClick={ linkClick }
                    data-route="/teams"
                    disabled={ !progress.players }
                >teams</button>
            </li>
        </ul>
    )
}

export default NavProgress;