import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import { cards } from "../../utils/constants";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <>
      <section className="saved-news-header">
        <span className="saved-news-header__subtitle">Saved articles</span>
        <h2 className="saved-news-header__title">
          Elise, you have 5 saved articles
        </h2>
        <p className="saved-news-header__text">
          By keywords:{" "}
          <span className="saved-news-header__text_bold">
            Nature, Yellowstone and 2 other
          </span>
        </p>
      </section>
      <NewsCardList cards={cards}>
        {cards.map((card, i) => (
          <NewsCard key={i} card={card} />
        ))}
      </NewsCardList>
    </>
  );
}

export default SavedNewsHeader;
