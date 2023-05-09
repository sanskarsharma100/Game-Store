import { PropTypes } from "prop-types";
import cartImg from "../assets/cartImg.svg";
import { MainContext } from "../Context/MainContext";
import { useState, useContext } from "react";
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
          className="flex justify-between items-center p-2 bg-darkBg2 mb-2 rounded-lg"
        >
          <p>{game.name}</p>
          <div className="flex items-center gap-2">
            <p>{indianRs.format(game.price).slice(0,-3)}</p>
            <img
              src={cross}
              alt="crossImg"
              className="w-8 p-2 hover:bg-worst hover:cursor-pointer duration-300 rounded-lg"
              onClick={() => addToCart(game.id)}
            />
          </div>
        </div>
      );
    }
  });

  return (
    <div className="w-full bg-darkBg min-h-screen pt-20 p-4 text-lightText">
      <div className="flex gap-2">
        <h1 className="font-heading text-5xl mb-4">Cart</h1>
        <img src={cartImg} alt="cart.svg" className="h-12" />
      </div>
      <div className="flex-col">{cartItems}</div>
      <div className="flex justify-between p-2 border-t-2 mt-4">
        <p>Total:</p>
        <p>{indianRs.format(total).slice(0,-3)}</p>
      </div>
      <button className="w-full font-heading font-bold text-xl mt-4 p-2 border border-darkHover hover:bg-darkHover text-darkHover hover:text-darkBg2 duration-300">Place Order</button>
    </div>
  );
}
Cart.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
};

export default Cart;
