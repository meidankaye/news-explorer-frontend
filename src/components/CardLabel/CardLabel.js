import "./CardLabel.css";
import bookmarkBlack from "../../images/bookmark-black.svg";

function CardLabel() {
  return (
    <>
      <div className="label">
        {/* <div className="label__popup">
          <span className="label__text">Sign in to save articles</span>
        </div> */}
        <button className="label__button" type="button">
          <img
            className="label__icon"
            src={bookmarkBlack}
            alt="Bookmark icon"
          ></img>
        </button>
      </div>
      {/* <div className="label label__left">
        <span className="label__text">Nature</span>
      </div> */}
    </>
  );
}

export default CardLabel;
