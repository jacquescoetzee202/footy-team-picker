import { ReactComponent as Ball } from "../assets/svg/ball.svg";
import { ReactComponent as GitHub } from "../assets/svg/github.svg";
import { ReactComponent as Home } from "../assets/svg/home.svg";
import { ReactComponent as Reset } from "../assets/svg/reset.svg";

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <Ball className="header__logo__svg"/>
            <h1 className="header__logo__text">team picker</h1>
        </div>
        <div className="header__links">
            <button>
                <Home />
            </button>
            <button>
                <Reset />
            </button>
            <a href="https://github.com/jnc202/footy-team-picker" target="__blank">
                <GitHub/>
            </a>
        </div>
    </header>
)

export default Header;