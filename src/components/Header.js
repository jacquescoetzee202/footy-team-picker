import { ReactComponent as Ball } from "../assets/svg/ball.svg";

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <Ball />
            <h1>team picker</h1>
        </div>
        <div className="header__links">
            <p>links</p>
        </div>
    </header>
)

export default Header;