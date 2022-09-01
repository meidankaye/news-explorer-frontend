import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import newsApi from "../../utils/NewsApi";
import {
  register,
  login,
  validateToken,
  getCurrentUser,
  getArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [pageTheme, setpageTheme] = React.useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [responseError, setResponseError] = React.useState(null);
  const [searchResult, setSearchResult] = React.useState(true);
  const [searchError, setSearchError] = React.useState("");
  const [cardCount, setCardCount] = React.useState(3);
  const [isCardListOpen, setIsCardListOpen] = React.useState(false);
  const [articles, setArticles] = React.useState([]);

  const location = useLocation();

  React.useEffect(() => {
    location.pathname === "/" ? setpageTheme(true) : setpageTheme("");
  }, [location.pathname]);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    token &&
      validateToken(token)
        .then((res) => {
          if (res.name) {
            setCurrentUser(res);
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    loggedIn &&
      getCurrentUser()
        .then((res) => {
          setCurrentUser((currentUser) => ({ ...currentUser, ...res.user }));
        })
        .catch((err) => console.log(err));
  }, [loggedIn]);

  React.useEffect(() => {
    loggedIn &&
      getArticles()
        .then((res) => {
          setCurrentUser((currentUser) => ({ ...currentUser, articles: res }));
        })
        .catch((err) => console.log(err));
  }, [loggedIn]);

  React.useEffect(() => {
    const prevArticles = localStorage.getItem("articles");
    if (prevArticles && prevArticles !== "[]") {
      setArticles(JSON.parse(prevArticles).slice(0, cardCount));
      setIsCardListOpen(true);
    }
  }, [cardCount]);

  function getData(keyword) {
    setSearchResult(true);
    setIsCardListOpen(true);
    localStorage.removeItem("articles");
    setArticles([]);
    setCardCount(3);
    newsApi
      .getArticles(keyword)
      .then((res) => {
        !res.articles.length && setSearchResult(false);
        localStorage.setItem("keyword", keyword);
        localStorage.setItem("articles", JSON.stringify(res.articles));
        setArticles(res.articles);
      })
      .catch(() => {
        setSearchError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
      });
  }

  function addArticle(data) {
    const keyword = localStorage.getItem("keyword");
    saveArticle(keyword, { data })
      .then((res) => {
        setCurrentUser((currentUser) => ({
          ...currentUser,
          articles: [...currentUser.articles, res],
        }));
      })
      .catch((err) => console.log(err));
  }

  function removeArticle(id) {
    deleteArticle(id)
      .then(() => {
        const arr = currentUser.articles.filter((item) => item._id !== id);
        setCurrentUser((currentUser) => ({
          ...currentUser,
          articles: arr,
        }));
      })
      .catch((err) => console.log(err));
  }

  function handleCount() {
    setCardCount((cardCount) => (cardCount += 3));
  }

  function handleMenuClick(boolean) {
    setIsMenuPopupOpen(boolean);
  }

  function handleHeaderButtonClick() {
    setIsSignInPopupOpen(true);
  }

  function handleSignUpRedirect(e) {
    e.preventDefault();
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(true);
  }

  function handleSignInRedirect(e) {
    e.preventDefault();
    setIsConfirmPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSignInPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsMenuPopupOpen(false);
  }

  function handleRegister({ email, password, username }) {
    register({ email, password, username })
      .then(() => {
        setIsSignUpPopupOpen(false);
        setIsConfirmPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setResponseError(err.message);
      });
  }

  function handleLogin({ email, password }) {
    login({ email, password })
      .then((user) => {
        user.token && localStorage.setItem("jwt", user.token);
        setLoggedIn(true);
        closeAllPopups();
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
        setResponseError(err.message);
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setCurrentUser({});
  }

  React.useEffect(() => {
    const handleClickClose = (e) => {
      if (e.target.classList.contains("popup_opened")) {
        closeAllPopups();
      }
    };

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen) {
      document.addEventListener("mousedown", handleClickClose);
      document.addEventListener("keydown", handleEscClose);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickClose);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isSignInPopupOpen, isSignUpPopupOpen]);

  return (
    <div className={`app ${pageTheme && "app_background"}`}>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          theme={pageTheme}
          openPopup={handleMenuClick}
          isOpen={isMenuPopupOpen}
        >
          <Navigation
            loggedIn={loggedIn}
            theme={pageTheme}
            isOpen={isMenuPopupOpen}
            onClose={closeAllPopups}
          >
            <HeaderButton
              loggedIn={loggedIn}
              theme={pageTheme}
              currentUser={currentUser}
              onHeaderButtonClick={handleHeaderButtonClick}
              onSignOut={handleSignOut}
            />
          </Navigation>
        </Header>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                articles={articles}
                onSearch={getData}
                searchResult={searchResult}
                isOpen={isCardListOpen}
                searchError={searchError}
                cardCount={cardCount}
                handleCount={handleCount}
                onSave={addArticle}
                onDelete={removeArticle}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedNews loggedIn={loggedIn} onDelete={removeArticle} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Login
          isOpen={isSignInPopupOpen}
          onClose={closeAllPopups}
          onSignUpRedirect={handleSignUpRedirect}
          onLogin={handleLogin}
          responseError={responseError}
        />
        <Register
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          onSignInRedirect={handleSignInRedirect}
          onRegister={handleRegister}
          responseError={responseError}
        />
        <PopupConfirm
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSignInRedirect={handleSignInRedirect}
          title="Registration successfully completed!"
          name="confirm"
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
