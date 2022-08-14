import "./HeaderButton.css";
import logoutWhite from "../../images/logoutwhite.svg";
import logoutBlack from "../../images/logout.svg";

function HeaderButton({ loggedIn, theme, onHeaderButtonClick }) {
  return loggedIn ? (
    <button className="header-button">
      <span className="header-button__username">Elise</span>
      <img src={logoutWhite} alt="Sign out icon" />
    </button>
  ) : (
    <button className="header-button" onClick={onHeaderButtonClick}>
      <span className="header-button__signin">Sign in</span>
    </button>
  );
}

export default HeaderButton;
