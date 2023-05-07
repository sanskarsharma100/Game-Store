import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const MainContext = React.createContext();

function MainContextProvider(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <MainContext.Provider
      value={{ isMenuOpen, toggleMenu, selectedGenre, setGenre }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainContextProvider, MainContext };
