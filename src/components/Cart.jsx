import { PropTypes } from "prop-types";
import cartImg from "../assets/cartImg.svg";
import { MainContext } from "../Context/MainContext";
import { useContext } from "react";
import cross from "../assets/cross.svg";

function Cart({ gamesList }) {
  const { cart, addToCart, total } = useContext(MainContext);

  let indianRs = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const cartItems = gamesList.map((game) => {
    if (cart.includes(game.id)) {
      return (
        <div
          key={game.id}
          className="mb-2 flex items-center justify-between gap-4 rounded-lg bg-darkBg2 p-2"
        >
          <div className="flex items-center gap-2">
            <figure>
              <img
                src={game.pictures[0]}
                alt="Picture of Game"
                className="hidden max-w-[10rem] xs:block"
                loading="lazy"
              />
            </figure>
            <p>{game.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{indianRs.format(game.price).slice(0, -3)}</p>
            <img
              src={cross}
              alt="crossImg"
              className="w-8 rounded-lg p-2 duration-300 hover:cursor-pointer hover:bg-worst"
              onClick={() => addToCart(game.id, game.price)}
            />
          </div>
        </div>
      );
    }
  });

  return (
    <div className="bg-darkBg">
      <div className={`m-auto min-h-screen p-4 text-lightText ${cart.length ? 'max-w-screen-sm':''}`}>
        <div className="flex gap-2">
          <h1 className="mb-4 font-heading text-5xl font-black">Cart</h1>
          <img src={cartImg} alt="cart.svg" className="h-12" />
        </div>
        {!cart.length ? (
          <h2 className="text-center text-3xl font-bold">
            No Games in the cart
          </h2>
        ) : (
          <>
            <section className="flex-col">{cartItems}</section>
            <div className="mt-4 flex justify-between border-t-2 p-2">
              <p>Total:</p>
              <p>
                {indianRs.format(total).slice(0, -3) + " (" + cart.length + ")"}
              </p>
            </div>
            <button className="mt-4 w-full border border-darkHover p-2 font-heading text-xl font-bold text-darkHover duration-300 hover:bg-darkHover hover:text-darkBg2" role="button">
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
Cart.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
};

export default Cart;
