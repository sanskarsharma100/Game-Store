import { PropTypes } from "prop-types";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import AnimatedPage from "./../components/AnimatedPage";
import heartBroken from "../assets/heartBroken.svg";

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
          <div className="m-auto flex flex-col items-center">
            <img
              src={heartBroken}
              alt="Empty Wishlist"
              className="w-16 xs:w-40 ss:w-auto"
            />
            <h2 className="text-center text-dynamicHeading2 font-semibold">
              No Games in the wishlist
            </h2>
          </div>
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
