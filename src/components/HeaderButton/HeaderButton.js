import "./HeaderButton.css";
import logoutWhite from "../../images/logoutwhite.svg";
import logoutBlack from "../../images/logoutblack.svg";

function HeaderButton({
  loggedIn,
  theme,
  currentUser,
  onHeaderButtonClick,
  onSignOut,
}) {
  return loggedIn ? (
    <button
      className={`header-button ${!theme ? "header-button_dark" : ""}`}
      onClick={onSignOut}
    >
      <span className="header-button__username">Elise</span>
      <img
        className="header-button__image"
        src={theme ? logoutWhite : logoutBlack}
        alt="Sign out icon"
      />
    </button>
  ) : (
    <button className="header-button" onClick={onHeaderButtonClick}>
      <span className="header-button__signin">Sign in</span>
    </button>
  );
}

export default HeaderButton;
