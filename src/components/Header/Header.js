import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ children, theme, isOpen, openPopup }) {
  const navigate = useNavigate();
  function handleClick() {
    isOpen ? openPopup(false) : openPopup(true);
  }
  return (
    <header
      className={`header ${
        isOpen ? (theme ? "header_theme_dark" : "header_theme_light") : ""
      } ${!theme ? "header_text_dark" : ""}`}
    >
      <span className="header__logo" onClick={() => navigate("/")}>
        NewsExplorer
      </span>
      {children}
      <button
        onClick={handleClick}
        className={`header__menu-button ${
          !theme ? "header__menu-button_dark" : ""
        } ${
          isOpen
            ? theme
              ? "header__menu-button_cross"
              : "header__menu-button_cross_dark"
            : ""
        }`}
        type="button"
      ></button>
    </header>
  );
}

export default Header;
