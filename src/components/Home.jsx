import { motion, animate, useCycle } from "framer-motion";
import PropTypes from "prop-types";
import Card from './Card';

function Home({ gamesList, toggleFavourite }) {

  const gamesCards = gamesList.map((game) => (
    <Card key={game.id} game={game} toggleFavourite={toggleFavourite} />
  ));

  return (
    <div className="w-full bg-darkBg min-h-screen pt-20 relative">
      <div className="mx-2 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center place-items-center">
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
