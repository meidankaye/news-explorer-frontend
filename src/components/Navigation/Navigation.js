import "./Navigation.css";

function Navigation({ children }) {
  return (
    <nav className="navigation">
      <button className="navigation__page-button">Home</button>
      {children}
    </nav>
  );
}

export default Navigation;
