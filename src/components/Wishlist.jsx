import { PropTypes } from "prop-types";
import Card from './Card';

function Wishlist({ gamesList, toggleFavourite }) {
  const filteredGames = gamesList.filter((game) => game.isFavorite);

  const gamesCards = filteredGames.map((game) => (
    <Card key={game.id} game={game} toggleFavourite={toggleFavourite} />
  ));

  return (
    <div className="w-full bg-darkBg min-h-screen pt-20 relative p-4 text-lightText">
      <h1 className="font-heading text-5xl mb-4 font-black">Wishlist</h1>
      <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center place-items-center overflow-visible font-text">
        {gamesCards}
      </div>
    </div>
  );
}

Wishlist.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default Wishlist;
