import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import heartEmpty from "../assets/heartEmpty.svg";
import heartFilled from "../assets/heartFilled.svg";
import { useIsSmall } from "./../Utils/constants";
import { numberToRupees } from "../Utils/utils";

const Card = ({ game, toggleFavourite }) => {
  const { isMenuOpen, cart, addToCart } = useContext(MainContext);
  const isSmall = useIsSmall();

  function getRatingColor() {
    if (game.rating > 4.1) {
      return "bg-best";
    } else if (game.rating > 3.1) {
      return "bg-bad";
    } else {
      return "bg-worst";
    }
  }

  const storeEffect = {
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
      variants={storeEffect}
      whileHover={{
        scale: 1.02,
        cursor: "pointer",
        backgroundColor: "hsl(0, 0%, 10%)",
        boxShadow: "0 0 10px hsl(0, 0%, 20%)",
      }}
      whileTap={{ scale: 1.012 }}
      className="w-full rounded-lg bg-darkBg2 active:scale-150"
    >
      <figure>
        <img
          src={game.pictures.banner}
          alt="Game Cover photo"
          className="rounded-t-lg"
          loading="lazy"
        />
      </figure>
      <div className="mt-2 p-2 text-lightText">
        <div className="flex-col justify-between ">
          <div className="flex min-h-[4rem] justify-between">
            <p className="line-clamp-2 h-fit text-dynamic font-bold">
              {game.name}
            </p>
            <p
              className={`flex max-h-7 items-center rounded-lg px-2 font-semibold ${getRatingColor()}`}
            >
              {game.rating}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <span>{numberToRupees(game.price)}</span>
            <div className="flex items-center gap-1">
              <button onClick={toggleFavourite} role="button">
                <img
                  src={game.isFavorite ? heartFilled : heartEmpty}
                  alt="Wishlist Icon"
                  id={game.id}
                  className={`m-2 w-6 select-none duration-300 ${
                    game.isFavorite || `hover:drop-shadow-4xl`
                  }`}
                />
              </button>
              <button
                role="button"
                className={`rounded-lg border px-2 py-1 text-sm font-medium duration-300 hover:text-darkBg2 xs:text-base ${
                  cart.includes(game.id)
                    ? `border-success text-success hover:bg-success`
                    : `border-darkHover text-darkHover hover:bg-darkHover`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(game.id, game.price);
                }}
              >
                {cart.includes(game.id) ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

Card.propTypes = {
  game: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Card;
