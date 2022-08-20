import React from "react";
import "./NewsCard.css";
import CardLabel from "../CardLabel/CardLabel";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NewsCard({ loggedIn, card, onSave, onDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function formatDate(date) {
    const dateArr = date.toString().slice(0, 10).split("-", 3);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    dateArr[1] = monthNames[parseInt(dateArr[1]) - 1];
    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`;
  }

  function getCardId() {
    const currentSavedCard = currentUser.articles.find(
      (item) => card.title === item.title
    );
    return currentSavedCard._id;
  }

  return (
    <li>
      <article className="news-card">
        <div className="news-card__image-box">
          <CardLabel
            loggedIn={loggedIn}
            onSave={onSave}
            onDelete={onDelete}
            card={card}
            getCardId={getCardId}
          />
          <a href="/">
            <img
              className="news-card__image"
              src={card.urlToImage}
              alt={card.source.name}
            ></img>
          </a>
        </div>
        <div className="news-card__info">
          <span className="news-card__date">
            {formatDate(card.publishedAt)}
          </span>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text"> {card.description}</p>
          <span className="news-card__source">{card.source.name}</span>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
