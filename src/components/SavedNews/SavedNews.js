import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNews({ onDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      {currentUser.articles.length && (
        <div className="saved-news__content">
          <div className="saved-news__cards">
            {currentUser.articles.map((card, i) => (
              <NewsCard key={i} card={card} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SavedNews;
