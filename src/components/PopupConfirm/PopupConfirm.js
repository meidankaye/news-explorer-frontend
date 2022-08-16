function PopupConfirm({ name, isOpen, title, onSignInRedirect, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <span className="popup__link" onClick={onSignInRedirect}>
          Sign in
        </span>
      </div>
    </div>
  );
}

export default PopupConfirm;
