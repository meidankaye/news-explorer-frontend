import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ children }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <button className="news-card-list__button">Show more</button>
    </section>
  );
}

export default NewsCardList;
