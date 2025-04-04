import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      <h1 className="header__title">PokeString</h1>
      <h2 className="header__beta">Beta</h2>
      <ul className="header__container">
        <Link to="/events" className="header__link">
          <li className="header__item">Events</li>
        </Link>

        <li className="header__item">
          <a href="" className="header__link">
            Create
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link">
            Popular
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
