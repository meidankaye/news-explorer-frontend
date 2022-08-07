import "./HeaderButton.css";
// import logoutWhite from "../../images/logoutwhite.svg";

function HeaderButton({ onHeaderButtonClick }) {
  return (
    // <button className="header-button">
    //   <span className="header-button__username">Elise</span>
    //   <img src={logoutWhite} alt="Sign out icon" />
    // </button>
    <button className="header-button" onClick={onHeaderButtonClick}>
        <span className="header-button__signin">
            Sign in
        </span>
    </button>
  );
}

export default HeaderButton;
