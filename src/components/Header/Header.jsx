import "./Header.css";
import logo from "../../assets/logo.png";

function Header(){
    return (
        <header className="header">
            <img src={logo} alt="" className="header__logo" />
            <h1 className="header__title">PokeString</h1>
            <ul className="header__container">
                <li className="header__item"><a href="" className="header__link">Events</a></li>
                <li className="header__item"><a href="" className="header__link">Create</a></li>
                <li className="header__item"><a href="" className="header__link">Popular</a></li>
            </ul>
        </header>
    );
}

export default Header;