import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import games from "./Utils/games";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import { MainContext } from "./Context/MainContext";
import GameDetail from './components/GameDetail';

function App() {
  const [gamesList, setGamesList] = useState(games);
  const { isMenuOpen, toggleMenu } = useContext(MainContext);

  function toggleFavourite(e) {
    setGamesList((prevList) =>
      prevList.map((game) => ({
        ...game,
        isFavorite:
          game.id === e.target.id ? !game.isFavorite : game.isFavorite,
      }))
    );
  }

  return (
    <main>
      <Navbar />
      <div
        className={`${
          !isMenuOpen && `hidden`
        } fixed z-30 min-h-screen w-screen bg-semiTransparantDark xs:hidden`}
        onClick={toggleMenu}
      ></div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/store"
          element={
            <Home gamesList={gamesList} toggleFavourite={toggleFavourite} />
          }
        />
        <Route path="/store/:id" element={<GameDetail />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist gamesList={gamesList} toggleFavourite={toggleFavourite} />
          }
        />
        <Route path="/cart" element={<Cart gamesList={gamesList} />} />
      </Routes>
    </main>
  );
}

export default App;
