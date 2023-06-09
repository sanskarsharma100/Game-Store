import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import games from "./Utils/games";
import Store from "./Pages/Store";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import { MainContext } from "./Context/MainContext";
import GameDetail from "./Pages/GameDetail/GameDetail";
import Footer from "./components/Footer";
import About from "./Pages/About";
import { AnimatePresence } from "framer-motion";
import RedirectToAbout from "./components/RedirectToAbout";

function App() {
  const [gamesList, setGamesList] = useState(games);
  const { isMenuOpen, toggleMenu } = useContext(MainContext);
  const location = useLocation();

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
      <main className="bg-blackGradient">
        <div
          className={`${
            !isMenuOpen && `hidden`
          } fixed z-30 min-h-screen w-screen bg-semiDarker xs:hidden`}
          onClick={toggleMenu}
        ></div>
        <AnimatePresence initial={false} mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<RedirectToAbout />} />
            <Route path="/about" element={<About />} />
            <Route
              exact
              path="/store"
              element={
                <Store
                  gamesList={gamesList}
                  toggleFavourite={toggleFavourite}
                />
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
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
