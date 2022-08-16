import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onSignInSubmit, onSignUpRedirect }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignInSubmit();
  };
  return (
    <PopupWithForm
      name="login"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        Email
        <input
          id="email-login-input"
          name="email"
          className="popup__input"
          type="email"
          placeholder="Enter email"
          required
        ></input>
      </label>
      <span className="popup__input-error">Invalid email address</span>
      <label className="popup__label">
        Password
        <input
          id="password-input"
          name="password"
          className="popup__input"
          type="password"
          placeholder="Enter password"
          minLength="6"
          required
        ></input>
      </label>
      <span className="popup__input-error">
        Please use at least 6 characters.
      </span>
      <span className="popup__response-error">This email is not available</span>
      <button
        className="popup__submit-button"
        type="submit"
        onClick={handleSubmit}
      >
        Sign in
      </button>
      <div className="popup__redirect-container">
        <span>or</span>
        <button className="popup__redirect-button" onClick={onSignUpRedirect}>
          Sign up
        </button>
      </div>
    </PopupWithForm>
  );
}

export default Login;
