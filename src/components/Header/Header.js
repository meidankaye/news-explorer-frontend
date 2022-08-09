import "./Header.css";

function Header({ children }) {
  return (
    <header className="header">
      <span className="header__logo">NewsExplorer</span>
      {children}
    </header>
  );
}

export default Header;
