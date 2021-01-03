import { ReactComponent as Ball } from "../../assets/svg/ball.svg";
import { ReactComponent as GitHub } from "../../assets/svg/github.svg";
import { ReactComponent as Reset } from "../../assets/svg/reset.svg";

const Header = ({ reset, homeClick }) => (
    <header className="header">
        <button onClick={ homeClick } className="header__logo">
            <Ball className="header__logo__svg"/>
            <h1 className="header__logo__text">team picker</h1>
        </button>
        <div className="header__links">
            <button>
                <Reset 
                    className="header__links__reset"
                    onClick={ reset }
                />
            </button>
            <a href="https://github.com/jnc202/footy-team-picker" target="__blank">
                <GitHub className="header__links__git"/>
            </a>
        </div>
    </header>
)

export default Header;