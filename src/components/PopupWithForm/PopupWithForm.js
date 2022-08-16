import "./PopupWithForm.css";

function PopupWithForm({ children, name, isOpen, title, onClose, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          noValidate
          name={`form-${name}`}
          className={`popup__form popup__form_type_${name}`}
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
