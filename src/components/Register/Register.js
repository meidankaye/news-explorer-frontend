import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register({ isOpen, onClose, onRegister, onSignInRedirect }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  };
  return (
    <PopupWithForm
      name="register"
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        Email
        <input
          id="email-register-input"
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
          id="password-register-input"
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
      <label className="popup__label">
        Username
        <input
          id="username-input"
          name="username"
          className="popup__input"
          type="string"
          placeholder="Enter your username"
          minLength="2"
          required
        ></input>
      </label>
      <span className="popup__input-error">
        Please use at least 2 characters.
      </span>
      <span className="popup__response-error">This email is not available</span>
      <button
        className="popup__submit-button"
        type="submit"
        onClick={handleSubmit}
      >
        Sign up
      </button>
      <div className="popup__redirect-container">
        <span>or</span>
        <button className="popup__redirect-button" onClick={onSignInRedirect}>
          Sign in
        </button>
      </div>
    </PopupWithForm>
  );
}

export default Register;
