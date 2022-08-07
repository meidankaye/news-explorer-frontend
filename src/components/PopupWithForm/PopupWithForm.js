import "./PopupWithForm.css";

function PopupWithForm({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Sign in</h2>
        <form className="popup__form">
          <label className="popup__label">
            Email
            <input
              name="email"
              className="popup__input"
              type={"email"}
              placeholder={"Enter email"}
              required
            ></input>
          </label>
          <span className="popup__input-error">Invalid email address</span>
          <label className="popup__label">
            Password
            <input
              name="password"
              className="popup__input"
              type={"password"}
              placeholder={"Enter password"}
              minLength="6"
              required
            ></input>
          </label>
          <span className="popup__input-error">
            Please use at least 6 characters.
          </span>
          <label className="popup__label">
            Username
            <input
              name="username"
              className="popup__input"
              type={"string"}
              placeholder={"Enter your username"}
              minLength="2"
              required
            ></input>
          </label>
          <span className="popup__input-error">
            Please use at least 2 characters.
          </span>
          <span className="popup__response-error">
            This email is not available
          </span>
          <button className="popup__submit-button" type="submit">
            Sign up
          </button>
        </form>
        <div className="popup__redirect-container">
          <span>or</span>
          <button className="popup__redirect-button">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
