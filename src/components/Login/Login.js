import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidate } from "../../utils/useFormAndValidate";

function Login({ isOpen, onClose, onLogin, onSignUpRedirect, responseError }) {
  const { values, errors, isNoErrors, handleChange } = useFormAndValidate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNoErrors) {
      onLogin(values);
    }
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
          value={values.email || ""}
          onChange={handleChange}
          name="email"
          className="popup__input"
          type={"email"}
          placeholder={"Enter email"}
          required
        ></input>
      </label>
      <span className="popup__input-error">{errors.email}</span>
      <label className="popup__label">
        Password
        <input
          value={values.password || ""}
          onChange={handleChange}
          name="password"
          className="popup__input"
          type={"password"}
          placeholder={"Enter password"}
          minLength="6"
          required
        ></input>
      </label>
      <span className="popup__input-error">{errors.password}</span>
      {responseError && (
        <span className="popup__response-error">{responseError}</span>
      )}
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
