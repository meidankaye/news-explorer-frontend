import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
  const [cardCount, setCardCount] = React.useState(3);
  const [isFullCardList, setIsFullCardList] = React.useState();

  const location = useLocation();

  React.useEffect(() => {
    location.pathname === "/" ? setpageTheme(true) : setpageTheme("");
  }, [location.pathname]);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    token &&
      validateToken(token)
        .then((res) => {
          if (res.user) {
            setCurrentUser(res.user);
            setLoggedIn(true);
            console.log(res.user);
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

  function handleCount() {
    setCardCount((cardCount) => (cardCount += 3));
  }

  function handleFullCardList() {
    setIsFullCardList(true);
  }

  function handlePartialCardList() {
    setIsFullCardList(true);
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
      .catch((err) => console.log(err));
  }

  function handleLogin({ email, password }) {
    login({ email, password })
      .then((user) => {
        localStorage.setItem("jwt", JSON.stringify(user.token));
        setLoggedIn(true);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`app ${pageTheme && "app_background"}`}>
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
                cardCount={cardCount}
                handleCount={handleCount}
                isFullCardList={isFullCardList}
                onSearch={handlePartialCardList}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedNewsHeader
                  loggedIn={loggedIn}
                  isFullCardList={isFullCardList}
                  onSearch={handleFullCardList}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Login
          isOpen={isSignInPopupOpen}
          onClose={closeAllPopups}
          onSignUpRedirect={handleSignUpRedirect}
          onLogin={handleLogin}
        />
        <Register
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          onSignInRedirect={handleSignInRedirect}
          onRegister={handleRegister}
        />
        <PopupConfirm
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSignInRedirect={handleSignInRedirect}
          title="Registration successfully completed!"
          name="confirm"
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
