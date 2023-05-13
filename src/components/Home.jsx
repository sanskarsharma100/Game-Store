import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Card from "./Card";
import { MainContext } from "../Context/MainContext";
import { useContext, useState } from "react";

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
      className="p-[3%] hover:cursor-pointer hover:text-darkHover"
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
    <div className="relative min-h-screen w-full bg-darkBg p-4 pt-20 text-lightText">
      <h1 className="mb-4 font-heading text-5xl font-black">
        {selectedGenre || "All"} Games
      </h1>
      <div className="mb-4 flex max-w-xs items-center gap-2 font-text">
        <span className="whitespace-nowrap">Sort By:</span>
        <motion.div whileHover="optionsHover" className="relative w-full">
          <motion.div className="rounded-lg bg-darkBg2 p-[3%]">
            {sortBy}
          </motion.div>
          <motion.div
            initial={{ display: "none" }}
            variants={optionsEffect}
            className="absolute z-[8000] w-full rounded-lg bg-darkBg2"
          >
            {sortByOptions}
          </motion.div>
        </motion.div>
      </div>
      {!gamesCards.length ? (
        <div className="flex w-full justify-center p-10">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center items-center gap-4 overflow-visible font-text xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
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
