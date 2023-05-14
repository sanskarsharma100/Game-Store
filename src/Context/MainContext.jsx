import React, { useState } from "react";
import PropTypes from "prop-types";
const MainContext = React.createContext();

function MainContextProvider(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [total, setTotal] = useState(0);

  function setGenre(category) {
    if (category == selectedGenre) {
      setSelectedGenre("");
    } else {
      setSelectedGenre(category);
    }
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function addToCart(id, price) {
    const index = cart.indexOf(id);
    if (index == -1) {
      setCart((prevCart) => [...prevCart, id]);
      setTotal(total + Number(price));
    } else {
      setCart((prevCart) => prevCart.filter((item) => item !== id));
      setTotal(total - Number(price));
    }
  }

  return (
    <MainContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        selectedGenre,
        setGenre,
        cart,
        addToCart,
        total,
        setIsMenuOpen,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainContextProvider, MainContext };
