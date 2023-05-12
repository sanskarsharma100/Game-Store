import React from "react";
import PropTypes from "prop-types";
import { motion, animate, useCycle } from "framer-motion";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import genres from "./../../Utils/genres";

function Menubar({ links, showCategory }) {
  const { isMenuOpen, selectedGenre, setGenre } = useContext(MainContext);

  const menuSlider = {
    open: {
      opacity: 0.9,
      right: "65%",
      transition: {
        ease: [0, 1.1, 0, 1.05],
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      right: "-100%",
      transition: {
        ease: [0.26, -0.01, 1, -0.54],
        duration: 0.4,
      },
    },
  };

  const textEffect = {
    textHover: {
      scale: 1.2,
      cursor: "pointer",
    },
    textTap: {
      scale: 0.95,
      cursor: "pointer",
    },
  };

  const ULlist = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.3 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuItemEffects = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 100, velocity: -100 },
      },
    },
    closed: {
      x: -100,
      opacity: 0,
      transition: {
        y: { stiffness: 100 },
      },
    },
  };

  const navLinks = links.map((links) => (
    <motion.li
      key={links.id}
      whileHover="textHover"
      whileTap="textTap"
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuItemEffects}
      className="text-center m-2 hover:text-darkHover"
    >
      <Link to={`/${links.to}`}>
        <motion.p variants={textEffect} className="p-2">
          {links.name}
        </motion.p>
      </Link>
    </motion.li>
  ));

  const categories = Object.keys(genres).map((item, i) => (
    <motion.li
      key={i}
      whileHover={genres[item] != selectedGenre && "textHover"}
      whileTap="textTap"
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuItemEffects}
      className={`text-center m-2 hover:text-darkHover ${
        genres[item] == selectedGenre && `selected`
      }`}
      onClick={() => setGenre(genres[item])}
    >
      <motion.p variants={textEffect} className="p-2">
        {genres[item]}
      </motion.p>
    </motion.li>
  ));

  return (
    <motion.div
      initial={{ x: "96%", display: "none" }}
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuSlider}
      className="bg-darkBg flex flex-col gap-5 absolute z-[5000] h-[93vh] w-2/3 backdrop-blur overflow-y-scroll pb-3 scrollbar-hidden"
    >
      <motion.ul
        animate={isMenuOpen ? "open" : "closed"}
        variants={ULlist}
        className="text-lightText font-bold xs:flex xs:align-middle text-lg font-text"
      >
        {navLinks}
      </motion.ul>
      {showCategory && (
        <div>
          <h2 className="text-2xl text-lightText font-extrabold underline font-heading text-center mb-2">
            Categories
          </h2>
          <motion.ul
            animate={isMenuOpen ? "open" : "closed"}
            variants={ULlist}
            className="text-lightText font-bold xs:flex xs:align-middle text-lg overflow-hidden font-text"
          >
            {categories}
          </motion.ul>
        </div>
      )}
    </motion.div>
  );
}

Menubar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  showCategory: PropTypes.bool,
};

export default Menubar;
