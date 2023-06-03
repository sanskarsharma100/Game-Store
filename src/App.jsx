import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import games from "./Utils/games";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import { MainContext } from "./Context/MainContext";
import GameDetail from "./Pages/GameDetail/GameDetail";
import Footer from "./components/Footer";
import Intro from "./Pages/Intro";

function App() {
  const [gamesList, setGamesList] = useState(games);
  const { isMenuOpen, toggleMenu } = useContext(MainContext);

  function toggleFavourite(e) {
    e.preventDefault();
    setGamesList((prevList) =>
      prevList.map((game) => ({
        ...game,
        isFavorite:
          game.id === e.target.id ? !game.isFavorite : game.isFavorite,
      }))
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-darkBg">
        <div
          className={`${
            !isMenuOpen && `hidden`
          } fixed z-30 min-h-screen w-screen bg-semiDarker xs:hidden`}
          onClick={toggleMenu}
        ></div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route
            exact
            path="/store"
            element={
              <Home gamesList={gamesList} toggleFavourite={toggleFavourite} />
            }
          />
          <Route
            path="/store/:id"
            element={
              <GameDetail
                gamesList={gamesList}
                toggleFavourite={toggleFavourite}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                gamesList={gamesList}
                toggleFavourite={toggleFavourite}
              />
            }
          />
          <Route path="/cart" element={<Cart gamesList={gamesList} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
