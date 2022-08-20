import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidate } from "../../utils/useFormAndValidate";

function Register({
  isOpen,
  onClose,
  onRegister,
  onSignInRedirect,
  responseError,
}) {
  const { values, errors, isNoErrors, handleChange } = useFormAndValidate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNoErrors) {
      onRegister(values);
    }
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
      <label className="popup__label">
        Username
        <input
          value={values.username || ""}
          onChange={handleChange}
          name="username"
          className="popup__input"
          type={"string"}
          placeholder={"Enter your username"}
          minLength="2"
          required
        ></input>
      </label>
      <span className="popup__input-error">{errors.username}</span>
      {responseError && (
        <span className="popup__response-error">{responseError}</span>
      )}
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
