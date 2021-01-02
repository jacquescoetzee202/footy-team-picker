import { ReactComponent as Ball } from "../assets/svg/ball.svg";
import { ReactComponent as GitHub } from "../assets/svg/github.svg";
import { ReactComponent as Home } from "../assets/svg/home.svg";
import { ReactComponent as Reset } from "../assets/svg/reset.svg";

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <Ball />
            <h1>team picker</h1>
        </div>
        <div className="header__links">
            <GitHub/>
            <Home />
            <Reset />
        </div>
    </header>
)

export default Header;