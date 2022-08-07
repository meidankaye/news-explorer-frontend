import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
// import Preloader from "../Preloader/Preloader";
// import NothingFound from "../NothingFound/NothingFound";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </div>
      {/* <NothingFound /> */}
      {/* <Preloader /> */}
      <NewsCardList />
      <About />
    </section>
  );
}

export default Main;
