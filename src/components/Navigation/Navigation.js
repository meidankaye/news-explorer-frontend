import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation({ children, loggedIn, theme, isOpen, onClose }) {
  const navigate = useNavigate();
  function routeToMain() {
    navigate("/");
    onClose();
  }
  function routeToNews() {
    navigate("/saved-news");
    onClose();
  }
  // loggedIn = true;
  return (
    <>
      <nav
        className={`navigation ${
          isOpen
            ? theme
              ? "navigation_theme_dark"
              : "navigation_theme_light"
            : ""
        } ${isOpen ? "navigation_clicked" : ""}`}
      >
        <button
          className={`navigation__page-button ${
            theme && "navigation__page-button_active"
          }`}
          onClick={routeToMain}
        >
          Home
        </button>
        {loggedIn && (
          <button
            className={`navigation__page-button ${
              theme ? "navigation__link_inactive" : "navigation__link_active"
            }`}
            onClick={routeToNews}
          >
            Saved articles
          </button>
        )}
        {children}
      </nav>
      {isOpen && <div className="navigation__overlay"></div>}
    </>
  );
}

export default Navigation;
