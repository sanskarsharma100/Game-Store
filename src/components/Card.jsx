import { motion, animate, useCycle } from "framer-motion";
import PropTypes from "prop-types";

function Card({ game, toggleFavourite }) {
  return (
    <motion.div
      key={game.id}
      whileHover={{
        scale: 1.02,
        cursor: "pointer",
        backgroundColor: "hsl(0, 0%, 10%)",
        boxShadow: "0 0 20px hsl(0, 0%, 30%)",
      }}
      className="bg-darkBg2 m-2 rounded-lg relative active:scale-150"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-0 m-3 w-6 select-none ${
          game.isFavorite || `hover:drop-shadow-4xl`
        } duration-300`}
        id={game.id}
        viewBox="0 0 475.82 442.01"
        version="1.0"
        onClick={toggleFavourite}
      >
        <g id="layer1" transform="translate(-134.07 -225.8)">
          <path
            id={game.id}
            d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z"
            stroke="#000"
            strokeWidth="18.7"
            fill={game.isFavorite ? "#e60000" : "#ccc"}
          />
        </g>
      </motion.svg>
      <img src={game.preview[0]} alt="preview" className="rounded-lg" />
      <div className="text-lightText p-2">
        <p>{game.name}</p>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  game: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Card;
