import "./Header.css";
// import menuWhite from "../../images/menu-white.svg";

function Header({ children }) {
  return (
    <header className="header">
      <span className="header__logo">NewsExplorer</span>
      {children}
      {/* <img src={menuWhite} className="header__menu" alt="Menu icon" /> */}
    </header>
  );
}

export default Header;
