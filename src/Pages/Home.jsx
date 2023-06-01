import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Card from "../components/Card";
import { MainContext } from "../Context/MainContext";
import { useContext, useState } from "react";
import genres from "../Utils/genres";
import { useIsSmall } from "../Utils/constants";
import { Link } from "react-router-dom";
import SortBy from "../components/SortBy";
import Categories from "./../components/Categories";

function Home({ gamesList, toggleFavourite }) {
  const isSmall = useIsSmall();

  const sortByValues = [
    { id: 1, value: "Relevance" },
    { id: 2, value: "Price(Highest First)" },
    { id: 3, value: "Price(Lowest First)" },
    { id: 4, value: "Rating" },
  ];
  const { selectedGenre, setGenre } = useContext(MainContext);
  const [sortBy, setSortBy] = useState(sortByValues[0].value);
  const [showSortByMenu, setShowSortByMenu] = useState(false);

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

  function toggleSortByMenu() {
    setShowSortByMenu(!showSortByMenu);
  }

  function handleSortBy(e) {
    setSortBy(e.target.textContent);
    toggleSortByMenu();
  }

  const gamesCards = filteredGames.map((game) => (
    <Link key={game.id} to={`/store/${game.id}`}>
      <Card game={game} toggleFavourite={toggleFavourite} />
    </Link>
  ));

  const textEffect = {
    textHover: {
      x: "5%",
      cursor: "pointer",
    },
    textTap: {
      scale: 0.95,
      cursor: "pointer",
    },
  };

  const categories = Object.keys(genres).map((item, i) => (
    <motion.li
      key={i + item}
      whileHover={genres[item] != selectedGenre ? "textHover" : "x:0"}
      whileTap="textTap"
      className={`hover:text-darkHover ${
        genres[item] == selectedGenre && `selected`
      }`}
      onClick={() => setGenre(genres[item])}
    >
      <motion.p variants={textEffect} className="mb-1 px-2 py-0.5">
        {genres[item]}
      </motion.p>
    </motion.li>
  ));

  return (
    <div className="relative min-h-screen w-full gap-2 bg-darkBg px-4 py-2 text-lightText xs:flex">
      {!isSmall && (
        <aside className="scrollbar-hidden sticky top-16 mr-4 mt-8 h-full min-w-fit overflow-y-scroll sm:pr-2">
          <Categories textEffect={textEffect} />
        </aside>
      )}
      <div>
        <h1 className="mb-2 font-heading text-4xl font-black xs:text-5xl ss:text-6xl sm:text-7xl">
          {selectedGenre || "All Games"}
        </h1>
        <SortBy
          sortBy={sortBy}
          sortByValues={sortByValues}
          showSortByMenu={showSortByMenu}
          handleSortBy={handleSortBy}
          toggleSortByMenu={toggleSortByMenu}
        />
        {!gamesCards.length ? (
          <div className="flex w-full justify-center p-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          </div>
        ) : (
          <div className="grid place-items-center items-center gap-4 overflow-visible font-text ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gamesCards}
          </div>
        )}
      </div>
    </div>
  );
}

Home.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default Home;
