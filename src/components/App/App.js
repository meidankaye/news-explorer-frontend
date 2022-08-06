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
  return (
    <div className="app app__background">
      <Header>
        <Navigation>
          <HeaderButton />
        </Navigation>
      </Header>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNewsHeader />} />
      </Routes>
      <PopupWithForm />
      <Footer />
    </div>
  );
}

export default App;
