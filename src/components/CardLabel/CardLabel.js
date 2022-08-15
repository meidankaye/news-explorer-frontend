import "./CardLabel.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import bookmarkGrey from "../../images/bookmark-grey.svg";
import bookmarkBlue from "../../images/bookmark-blue.svg";
import trashcan from "../../images/trash-grey.svg";

function CardLabel({ loggedIn }) {
  const isMain = useLocation().pathname === "/";
  const [isMarked, setIsMarked] = useState(false);

  function handleBookmarkClick() {
    loggedIn && setIsMarked((isMarked) => !isMarked);
  }
  return (
    <>
      <div className="label">
        <div className="label__popup">
          <span className="label__text">
            {isMain ? "Sign in to save articles" : "Remove from saved"}
          </span>
        </div>
        <button
          className="label__button"
          onClick={handleBookmarkClick}
          type="button"
        >
          {isMain ? (
            !isMarked ? (
              <img
                className="label__icon"
                src={bookmarkGrey}
                alt="Bookmark icon"
              />
            ) : (
              <img
                className="label__icon_marked"
                src={bookmarkBlue}
                alt="Marked Bookmark icon"
              />
            )
          ) : (
            <img className="label__trash" src={trashcan} alt="Trash icon" />
          )}
        </button>
      </div>
      {/* <div className="label label__left">
        <span className="label__text">Nature</span>
      </div> */}
    </>
  );
}

export default CardLabel;
