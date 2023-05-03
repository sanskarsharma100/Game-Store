import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import games from "./Utils/games";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [gamesList, setGamesList] = useState(games);

  function toggleFavourite(e) {
    console.log("e.target", e.target.id);
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
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/store"
          element={
            <Home gamesList={gamesList} toggleFavourite={toggleFavourite} />
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
