import { motion, animate, useCycle } from "framer-motion";
import PropTypes, { func } from "prop-types";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import heartEmpty from "../assets/heartEmpty.svg";
import heartFilled from "../assets/heartFilled.svg";

function Card({ game, toggleFavourite }) {
  const { isMenuOpen, cart, addToCart } = useContext(MainContext);

  function getRatingColor() {
    if (game.rating > 4.1) {
      return "bg-best";
    } else if (game.rating > 3.1) {
      return "bg-bad";
    } else {
      return "bg-worst";
    }
  }

  const homeEffect = {
    menuOpened: {
      scale: 0.9,
      transition: {
        type: "tween",
      },
    },
    menuClosed: {
      scale: 1,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <motion.div
      key={game.id}
      animate={isMenuOpen ? "menuOpened" : "menuClosed"}
      variants={homeEffect}
      whileHover={{
        scale: 1.02,
        cursor: "pointer",
        backgroundColor: "hsl(0, 0%, 10%)",
        boxShadow: "0 0 20px hsl(0, 0%, 30%)",
      }}
      whileTap={{ scale: 1.012 }}
      className="bg-darkBg2 rounded-lg active:scale-150"
    >
      <img src={game.preview[0]} alt="preview" className="rounded-t-lg" />
      <div className="text-lightText p-2 mt-2">
        <div className="flex-col justify-between relative">
          <div className="flex justify-between">
            <p className="font-bold text-xl min-h-[4rem]">{game.name}</p>
            <p
              className={`px-2 font-semibold rounded-lg flex items-center max-h-7 ${getRatingColor()}`}
            >
              {game.rating}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span>&#x20b9;{game.price}</span>
            <div className="flex gap-1 items-center">
              <img
                src={game.isFavorite ? heartFilled : heartEmpty}
                alt="emptyHeart"
                id={game.id}
                className={`m-2 w-6 select-none duration-300 ${
                  game.isFavorite || `hover:drop-shadow-4xl`
                }`}
                onClick={toggleFavourite}
              />
              <button
                className={`py-1 px-2 text-black font-medium rounded-lg duration-300 ${
                  cart.includes(game.id) ? `bg-success` : `bg-darkHover`
                }`}
                onClick={() => addToCart(game.id)}
              >
                {cart.includes(game.id) ? 'Added to cart':'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  game: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Card;
