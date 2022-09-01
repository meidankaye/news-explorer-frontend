import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function Main({
  loggedIn,
  articles,
  cardCount,
  handleCount,
  onSearch,
  isOpen,
  searchError,
  searchResult,
  onSave,
}) {
  return (
    <section className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
      <NewsCardList
        isOpen={isOpen}
        searchResult={searchResult}
        searchError={searchError}
        articles={articles}
        handleCount={handleCount}
      >
        {articles.length &&
          articles
            .slice(0, cardCount)
            .map((card, i) => (
              <NewsCard
                key={i}
                card={card}
                loggedIn={loggedIn}
                onSave={onSave}
              />
            ))}
      </NewsCardList>
      <About />
    </section>
  );
}

export default Main;
