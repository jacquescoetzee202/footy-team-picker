import { Link } from "react-router-dom";

const NavProgress = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/set-up/team1">team 1</Link>
            </li>
            <li>
                <Link to="/set-up/team2">team 2</Link>
            </li>
            <li>
                <Link to="/set-up/players">player</Link>
            </li>
            <li>
                <Link to="/set-up/teams">selections</Link>
            </li>
        </ul>
    )
}

export default NavProgress;