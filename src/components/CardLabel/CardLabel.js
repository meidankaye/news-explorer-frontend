import "./CardLabel.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import bookmark from "../../images/bookmark-black.svg";
import bookmarkBlue from "../../images/bookmark-blue.svg";
import trashcan from "../../images/trash-black.svg";

function CardLabel({ loggedIn, onSave, onDelete, card, getCardId }) {
  const isMain = useLocation().pathname === "/";
  const [isMarked, setIsMarked] = useState(false);

  function handleBookmarkClick(e) {
    e.stopPropagation();
    if (loggedIn && isMain) {
      !isMarked && onSave(card);
      setIsMarked((isMarked) => !isMarked);
    } else if (!isMain) {
      onDelete(getCardId());
    }
  }
  return (
    <>
      <div className="label label_right">
        <div className="label__popup">
          {isMain ? "Sign in to save articles" : "Remove from saved"}
        </div>
        <button
          className="label__button"
          onClick={handleBookmarkClick}
          type="button"
        >
          {isMain ? (
            !isMarked ? (
              <img className="label__icon" src={bookmark} alt="Bookmark icon" />
            ) : (
              <img
                className="label__icon_marked"
                src={bookmarkBlue}
                alt="Marked Bookmark icon"
              />
            )
          ) : (
            <img className="label__icon" src={trashcan} alt="Trash icon" />
          )}
        </button>
      </div>
      {!isMain && (
        <div className="label label__left">
          <span className="label__text">{card.keyword}</span>
        </div>
      )}
    </>
  );
}

export default CardLabel;
