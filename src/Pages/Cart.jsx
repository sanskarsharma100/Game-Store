import { PropTypes } from "prop-types";
import cartImg from "../assets/cartImg.svg";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";
import cross from "../assets/cross.svg";
import { numberToRupees } from "../Utils/utils";
import AnimatedPage from "./../components/AnimatedPage";
import { Link } from "react-router-dom";
import emptyCart from "../assets/emptyCart.svg";

function Cart({ gamesList }) {
  const { cart, addToCart, total } = useContext(MainContext);

  const cartItems = gamesList.map((game) => {
    if (cart.includes(game.id)) {
      return (
        <div
          key={game.id}
          className="mb-2 flex items-center justify-between gap-4 rounded-lg bg-darkBg2 p-2"
        >
          <Link to={`/store/${game.id}`}>
            <div className="flex items-center gap-2">
              <figure>
                <img
                  src={game.pictures.banner}
                  alt="Picture of Game"
                  className="hidden max-w-[10rem] xs:block"
                  loading="lazy"
                />
              </figure>
              <p>{game.name}</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <p>{numberToRupees(game.price)}</p>
            <button className="w-8 rounded-lg bg-worst p-2 duration-300">
              <img
                src={cross}
                alt="crossImg"
                className="w-full"
                onClick={() => addToCart(game.id, game.price)}
              />
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <AnimatedPage>
      <div className="pb-20">
        <div
          className={`m-auto min-h-screen p-4 text-lightText ${
            cart.length ? "max-w-screen-sm" : ""
          }`}
        >
          <div className="flex gap-2">
            <h1 className="mb-4 font-heading text-5xl font-black">Cart</h1>
            <img src={cartImg} alt="cart.svg" className="h-12" />
          </div>
          {!cart.length ? (
            <div className="m-auto flex flex-col items-center gap-4">
              <img
                src={emptyCart}
                alt="Empty Cart"
                className="w-20 xs:w-40 ss:w-auto"
              />
              <h2 className="text-center text-dynamicHeading2 font-semibold">
                No Games in the cart
              </h2>
            </div>
          ) : (
            <>
              <section className="flex-col">{cartItems}</section>
              <div className="mt-4 flex justify-between border-t-2 p-2">
                <p>Total:</p>
                <p>{numberToRupees(total) + " (" + cart.length + ")"}</p>
              </div>
              <button
                className="mt-4 w-full border border-darkHover p-2 font-heading text-xl font-bold text-darkHover duration-300 hover:bg-darkHover hover:text-darkBg2"
                role="button"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}
Cart.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
};

export default Cart;
