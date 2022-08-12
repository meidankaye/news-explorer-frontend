import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import UserMenu from "../UserMenu/UserMenu";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [mainBackground, setMainBackground] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const location = useLocation();

  React.useEffect(() => {
    location.pathname === "/" ? setMainBackground(true) : setMainBackground("");
  }, [location.pathname]);

  function handleHeaderButtonClick() {
    setIsPopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopupOpen(false);
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
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickClose);
      document.addEventListener("keydown", handleEscClose);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickClose);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isPopupOpen]);

  return (
    <div className={`app ${mainBackground && "app__background"}`}>
      <Header>
        <Navigation>
          <HeaderButton onHeaderButtonClick={handleHeaderButtonClick} />
        </Navigation>
        <UserMenu />
      </Header>
      <Routes>
        <Route index path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/saved-news"
          element={<SavedNewsHeader loggedIn={loggedIn} />}
        />
      </Routes>
      <PopupWithForm isOpen={isPopupOpen} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
