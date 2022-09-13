import "./NewsCardList.css";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
function NewsCardList({
  children,
  isOpen,
  searchResult,
  showMoreButton,
  searchError,
  articles,
  handleCount,
}) {
  return (
    <section className={`news-card-list ${isOpen && "news-card-list_opened"}`}>
      {articles.length ? (
        <>
          <h2 className="news-card-list__title">Search results</h2>
          <ul className="news-card-list__container">{children}</ul>
          <button
            onClick={handleCount}
            className={`news-card-list__button ${
              showMoreButton && "news-card-list__button_active"
            }`}
          >
            Show more
          </button>
        </>
      ) : searchResult ? (
        <Preloader />
      ) : (
        <NothingFound />
      )}
    </section>
  );
}

export default NewsCardList;
