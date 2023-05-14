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
          className="mb-2 flex items-center justify-between rounded-lg bg-darkBg2 p-2 gap-4"
        >
          <div className="flex items-center gap-2">
            <figure>
              <img src={game.preview[0]} alt="preview" className="max-w-[10rem] ss:max-w-xs hidden xs:block" />
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
    <div className="min-h-screen w-full bg-darkBg p-4 text-lightText">
      <div className="flex gap-2">
        <h1 className="mb-4 font-heading text-5xl font-black">Cart</h1>
        <img src={cartImg} alt="cart.svg" className="h-12" />
      </div>
      {!cart.length ? (
        <h2 className="text-center text-3xl font-bold">No Games in the cart</h2>
      ) : (
        <>
          <div className="flex-col">{cartItems}</div>
          <div className="mt-4 flex justify-between border-t-2 p-2">
            <p>Total:</p>
            <p>{indianRs.format(total).slice(0, -3)}</p>
          </div>
          <button className="mt-4 w-full border border-darkHover p-2 font-heading text-xl font-bold text-darkHover duration-300 hover:bg-darkHover hover:text-darkBg2">
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
Cart.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
};

export default Cart;
