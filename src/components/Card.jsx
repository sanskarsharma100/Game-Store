import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import heartEmpty from "../assets/heartEmpty.svg";
import heartFilled from "../assets/heartFilled.svg";
import { useIsSmall } from "./../Utils/constants";
import { Link } from 'react-router-dom';

function Card({ game, toggleFavourite }) {
  const { isMenuOpen, cart, addToCart } = useContext(MainContext);
  const isSmall = useIsSmall();

  let indianRs = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

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
    <motion.section
      key={game.id}
      animate={isMenuOpen && isSmall ? "menuOpened" : "menuClosed"}
      variants={homeEffect}
      whileHover={{
        scale: 1.02,
        cursor: "pointer",
        backgroundColor: "hsl(0, 0%, 10%)",
        boxShadow: "0 0 10px hsl(0, 0%, 20%)",
      }}
      whileTap={{ scale: 1.012 }}
      className="rounded-lg bg-darkBg2 active:scale-150"
    >
      <figure>
        <img src={game.preview[0]} alt="preview" className="rounded-t-lg" />
      </figure>
      <div className="mt-2 p-2 text-lightText">
        <div className="flex-col justify-between">
          <div className="flex justify-between">
            <p className="min-h-[4rem] text-xl font-bold">{game.name}</p>
            <p
              className={`flex max-h-7 items-center rounded-lg px-2 font-semibold ${getRatingColor()}`}
            >
              {game.rating}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <span>{indianRs.format(game.price).slice(0, -3)}</span>
            <div className="flex items-center gap-1">
              <figure>
                <img
                  src={game.isFavorite ? heartFilled : heartEmpty}
                  alt="emptyHeart"
                  id={game.id}
                  className={`m-2 w-6 select-none duration-300 ${
                    game.isFavorite || `hover:drop-shadow-4xl`
                  }`}
                  onClick={toggleFavourite}
                />
              </figure>
              <button
                className={`rounded-lg border px-2 py-1 font-medium duration-300 hover:text-darkBg2 ${
                  cart.includes(game.id)
                    ? `border-success text-success hover:bg-success`
                    : `border-darkHover text-darkHover hover:bg-darkHover`
                }`}
                onClick={(e) => {
                  e.preventDefault() 
                  addToCart(game.id, game.price)}}
              >
                {cart.includes(game.id) ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

Card.propTypes = {
  game: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Card;
