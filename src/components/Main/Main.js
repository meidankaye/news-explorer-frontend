import "./Main.css";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import { cards } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({ loggedIn, cardCount, onSearch, isFullCardList }) {
  const [isSearching, setIsSearching] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  function handleSearch() {
    setIsSearching(true);
    new Promise((resolve) => {
      setTimeout(resolve, 100);
    }).then((cards) => {
      if (!cards || cards.length === 0) {
        setIsNotFound(true);
        setIsFound(false);
      }
      onSearch();
      setIsSearching(true);
      setIsFound(false);
      setIsNotFound(false);
    });
  }
  return (
    <section className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={handleSearch} />
      </div>
      {isSearching && <Preloader />}
      {isNotFound && <NothingFound />}
      {isFound && (
        <NewsCardList cards={cards} isFullCardList={isFullCardList}>
          {cards.length &&
            cards
              .slice(0, cardCount)
              .map((card, i) => (
                <NewsCard key={i} card={card} loggedIn={loggedIn} />
              ))}
        </NewsCardList>
      )}
      <About />
    </section>
  );
}

export default Main;
