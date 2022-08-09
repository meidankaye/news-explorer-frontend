import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleHeaderButtonClick() {
    setIsPopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    const handleClickClose = (e) => {
      if (e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickClose);
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickClose);
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isPopupOpen]);

  return (
    <div className="app app__background">
      <Header>
        <Navigation>
          <HeaderButton onHeaderButtonClick={handleHeaderButtonClick} />
        </Navigation>
      </Header>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNewsHeader />} />
      </Routes>
      <PopupWithForm isOpen={isPopupOpen} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
