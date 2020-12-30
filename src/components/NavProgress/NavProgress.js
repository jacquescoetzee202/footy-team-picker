const NavProgress = ({ progress, currentStage, linkClick }) => {
    return (
        <ul className="nav-list">
            <li className="nav-list__item">
                <button
                    className={`nav-list__item__button ${currentStage === 1 ? "current-nav" : null }`} 
                    onClick={ linkClick }
                    data-route="/"
                >Home</button>
            </li>
            <li className="nav-list__item">
                <button
                    className={`nav-list__item__button ${currentStage === 2 ? "current-nav" : null }`} 
                    onClick={ linkClick }
                    data-route="/set-up/team1"
                >team 1</button>
            </li>
            <li className="nav-list__item">
                <button
                    className={`nav-list__item__button ${currentStage === 3 ? "current-nav" : null }`}  
                    onClick={ linkClick }
                    data-route="/set-up/team2"
                    disabled={ !progress.team1 }
                >team 2</button>
            </li>
            <li className="nav-list__item">
                <button
                    className={`nav-list__item__button ${currentStage === 4 ? "current-nav" : null }`}  
                    onClick={ linkClick }
                    data-route="/set-up/players"
                    disabled={ !progress.team2 }
                >players</button>
            </li>
            <li className="nav-list__item">
                <button
                    className={`nav-list__item__button ${currentStage === 5 ? "current-nav" : null }`}  
                    onClick={ linkClick }
                    data-route="/teams"
                    disabled={ !progress.players }
                >teams</button>
            </li>
        </ul>
    )
}

export default NavProgress;