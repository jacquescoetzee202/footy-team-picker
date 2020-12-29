import { Link } from "react-router-dom";

const NavProgress = ({ progress }) => {
    return (
        <ul className="nav-list">
            <li className="nav-list__item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/set-up/team1">team 1</Link>
            </li>
            <li className="nav-list__item">
                <Link disable={ progress.team1 } to="/set-up/team2">team 2</Link>
            </li>
            <li className="nav-list__item">
                <Link disable={ progress.team2 } to="/set-up/players">players</Link>
            </li>
            <li className="nav-list__item">
                <Link disable={ progress.players } to="/teams">selections</Link>
            </li>
        </ul>
    )
}

export default NavProgress;