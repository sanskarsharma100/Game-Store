import { PropTypes } from "prop-types";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import AnimatedPage from "./../components/AnimatedPage";

function Wishlist({ gamesList, toggleFavourite }) {
  const filteredGames = gamesList.filter((game) => game.isFavorite);

  const gamesCards = filteredGames.map((game) => (
    <Link key={game.id} to={`/store/${game.id}`}>
      <Card key={game.id} game={game} toggleFavourite={toggleFavourite} />
    </Link>
  ));

  return (
    <AnimatedPage>
      <div className="relative h-screen w-full p-4 pb-20 text-lightText">
        <h1 className="mb-4 font-heading text-5xl font-black">Wishlist</h1>
        {!gamesCards.length ? (
          <h2 className="text-center text-3xl font-bold">
            No Games in the wishlist
          </h2>
        ) : (
          <div className="grid place-items-center items-center gap-4 overflow-visible font-content xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {gamesCards}
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}

Wishlist.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default Wishlist;
