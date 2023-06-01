import { useContext } from "react";
import genres from "./../Utils/genres";
import { motion } from "framer-motion";
import { MainContext } from "../Context/MainContext";
import { PropTypes } from "prop-types";

function Categories({ ULlist, menuItemEffects, textEffect }) {
  const { isMenuOpen, selectedGenre, setGenre } = useContext(MainContext);

  const categories = Object.keys(genres).map((item, i) => (
    <motion.li
      key={i}
      whileHover={genres[item] != selectedGenre ? "textHover" : "x:0"}
      whileTap="textTap"
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuItemEffects}
      className={`m-2 text-center hover:text-darkHover xs:m-0 xs:text-left ${
        genres[item] == selectedGenre && `selected`
      }`}
      onClick={() => setGenre(genres[item])}
    >
      <motion.p variants={textEffect} className="p-2 xs:mb-1 xs:px-2 xs:py-0.5">
        {genres[item]}
      </motion.p>
    </motion.li>
  ));

  return (
    <>
      <h2 className="mb-2 border-b-2 pb-1 text-center font-heading text-2xl font-extrabold text-lightText xs:font-bold sm:mb-4 sm:text-3xl">
        Categories
      </h2>
      <motion.ul
        animate={isMenuOpen ? "open" : "closed"}
        variants={ULlist}
        className="overflow-hidden font-text text-lg font-bold text-lightText xs:text-base xs:font-medium sm:text-lg"
      >
        {categories}
      </motion.ul>
    </>
  );
}

Categories.propTypes = {
  ULlist: PropTypes.objectOf(PropTypes.object),
  menuItemEffects: PropTypes.objectOf(PropTypes.object),
  textEffect: PropTypes.objectOf(PropTypes.object),
};

export default Categories;
