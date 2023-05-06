import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
const MainContext = React.createContext();

function MainContextProvider(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MainContext.Provider value={{isMenuOpen,toggleMenu}}>
      {props.children}
    </MainContext.Provider>
  )
}

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {MainContextProvider, MainContext}