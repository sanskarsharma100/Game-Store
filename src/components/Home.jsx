import { motion, animate, useCycle } from "framer-motion";
import PropTypes from "prop-types";
import Card from "./Card";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";

function Home({ gamesList, toggleFavourite }) {
  const { selectedGenre } = useContext(MainContext);
  const filteredGames =
    selectedGenre != ""
      ? gamesList.filter((game) => game.genre.includes(selectedGenre))
      : gamesList;

  const gamesCards = filteredGames.map((game) => (
    <Card key={game.id} game={game} toggleFavourite={toggleFavourite} />
  ));

  return (
    <div className="w-full bg-darkBg min-h-screen pt-20 relative p-4">
      <h1 className="text-lightText font-heading text-5xl mb-4">
        {selectedGenre || "All"} Games
      </h1>
      <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center place-items-center overflow-visible font-text">
        {gamesCards}
      </div>
    </div>
  );
}

Home.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default Home;
