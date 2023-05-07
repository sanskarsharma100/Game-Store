import React, { useState } from "react";
import PropTypes from "prop-types";
const MainContext = React.createContext();

function MainContextProvider(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

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

  function addToCart(id) {
    const index = cart.indexOf(id);
    if (index == -1) {
      setCart((prevCart) => [...prevCart, id]);
    } else {
      setCart((prevCart) => prevCart.filter(item => item !== id)
      );
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
