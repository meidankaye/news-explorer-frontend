import "./App.css";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app app__background">
      <Header>
        <Navigation>
          <HeaderButton />
        </Navigation>
      </Header>
      <Main></Main>
      <Footer />
    </div>
  );
}

export default App;
