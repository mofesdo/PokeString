import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      <h1 className="header__title">PokeString</h1>
      <h2 className="header__beta">Beta</h2>
      <button className="header__menu" onClick={toggleMenu}>&#9776;</button>
      <ul className={`header__container ${isOpen ? "active" : ""}`}>
        <Link to="/events" className="header__link">
          <li className="header__item">Events</li>
        </Link>
        <Link to="/create" className="header__link">
          <li className="header__item">Create</li>
        </Link>
        <Link to="/popular" className="header__link">
        <li className="header__item">
            Popular
        </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
