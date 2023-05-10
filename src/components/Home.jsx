import { motion, animate, useCycle } from "framer-motion";
import PropTypes, { func } from "prop-types";
import Card from "./Card";
import { MainContext } from "../Context/MainContext";
import { useContext, useReducer, useState } from "react";

function Home({ gamesList, toggleFavourite }) {
  const sortByValues = [
    { id: 1, value: "Relevance" },
    { id: 2, value: "Price(Highest First)" },
    { id: 3, value: "Price(Lowest First)" },
    { id: 4, value: "Rating" },
  ];
  const { selectedGenre } = useContext(MainContext);
  const [sortBy, setSortBy] = useState(sortByValues[0].value);

  const filteredGames =
    selectedGenre != ""
      ? gamesList.filter((game) => game.genre.includes(selectedGenre))
      : gamesList;

  if (sortBy == sortByValues[0].value) {
    filteredGames.sort((game1, game2) => game1.id - game2.id);
  } else if (sortBy == sortByValues[1].value) {
    filteredGames.sort((game1, game2) => game2.price - game1.price);
  } else if (sortBy == sortByValues[2].value) {
    filteredGames.sort((game1, game2) => game1.price - game2.price);
  } else if (sortBy == sortByValues[3].value) {
    filteredGames.sort((game1, game2) => game2.rating - game1.rating);
  }

  function handleSortBy(e) {
    setSortBy(e.target.textContent);
  }

  const gamesCards = filteredGames.map((game) => (
    <Card key={game.id} game={game} toggleFavourite={toggleFavourite} />
  ));

  const sortByOptions = sortByValues.map((item) => (
    <div
      key={item.id}
      className="p-[3%] hover:text-darkHover hover:cursor-pointer"
      onClick={handleSortBy}
    >
      {item.value}
    </div>
  ));

  const optionsEffect = {
    optionsHover: {
      display: "block",
    },
  };

  return (
    <div className="w-full bg-darkBg min-h-screen pt-20 relative p-4 text-lightText">
      <h1 className="font-heading text-5xl mb-4 font-black">
        {selectedGenre || "All"} Games
      </h1>
      <div className="font-text flex items-center gap-2 mb-4 max-w-xs">
        <span className="whitespace-nowrap">Sort By:</span>
        <motion.div whileHover="optionsHover" className="relative w-full">
          <motion.div className="bg-darkBg2 p-[3%] rounded-lg">
            {sortBy}
          </motion.div>
          <motion.div
            initial={{ display: "none" }}
            variants={optionsEffect}
            className="absolute bg-darkBg2 w-full z-[8000] rounded-lg"
          >
            {sortByOptions}
          </motion.div>
        </motion.div>
      </div>
      {!gamesCards.length ? (
        <div className="w-full flex justify-center p-10">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center place-items-center overflow-visible font-text">
          {gamesCards}
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default Home;
