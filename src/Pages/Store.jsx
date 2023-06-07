import PropTypes from "prop-types";
import Card from "../components/Card";
import { MainContext } from "../Context/MainContext";
import { useContext, useState } from "react";
import { useIsSmall } from "../Utils/constants";
import { Link } from "react-router-dom";
import SortBy from "../components/SortBy";
import Categories from "../components/Categories";
import AnimatedPage from "../components/AnimatedPage";
import LoaderAnim from "./../components/LoaderAnim";

function Store({ gamesList, toggleFavourite }) {
  const isSmall = useIsSmall();

  const sortByValues = [
    { id: 1, value: "Relevance" },
    { id: 2, value: "Price(Highest First)" },
    { id: 3, value: "Price(Lowest First)" },
    { id: 4, value: "Rating" },
  ];
  const { selectedGenre } = useContext(MainContext);
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

  return (
    <AnimatedPage>
      <div className="relative min-h-screen w-full gap-2 px-4 py-2 pb-20 text-lightText xs:flex xs:justify-evenly">
        {!isSmall && (
          <aside className="scrollbar-hidden sticky top-16 mr-4 mt-8 h-full min-w-fit overflow-y-scroll sm:pr-2">
            <Categories textEffect={textEffect} />
          </aside>
        )}
        <div className="w-full">
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
              <LoaderAnim />
            </div>
          ) : (
            <div className="grid items-center gap-4 overflow-visible font-content ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {gamesCards}
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

Store.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default Store;
