import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation({ children }) {
  const navigate = useNavigate();
  function routeToMain() {
    navigate("/");
  }
  function routeToNews() {
    navigate("/saved-news");
  }
  return (
    <nav className="navigation">
      <button className="navigation__page-button" onClick={routeToMain}>
        Home
      </button>
      <button className="navigation__page-button" onClick={routeToNews}>
        Saved articles
      </button>
      {children}
    </nav>
  );
}

export default Navigation;
