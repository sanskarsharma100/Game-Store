import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import genres from "./../../Utils/genres";
import { useIsSmall } from "./../../Utils/constants";

function Menubar({ links, showCategory }) {
  const { isMenuOpen, selectedGenre, setGenre, setIsMenuOpen } =
    useContext(MainContext);
  const isSmall = useIsSmall();

  useEffect(() => {
    if (!isSmall) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [isSmall]);

  const menuSlider = {
    open: {
      opacity: 0.75,
      right: "0%",
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
      scale: 1.1,
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
      className="m-2 text-center hover:text-darkHover"
    >
      <NavLink
        to={`/${links.to}`}
        end
        className={({ isActive }) => isActive ? "activeRoute":''}
      >
        <motion.p variants={textEffect} className="p-2">
          {links.name}
        </motion.p>
      </NavLink>
    </motion.li>
  ));

  const categories = Object.keys(genres).map((item, i) => (
    <motion.li
      key={i}
      whileHover={genres[item] != selectedGenre && "textHover"}
      whileTap="textTap"
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuItemEffects}
      className={`m-2 text-center hover:text-darkHover ${
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
      animate={isMenuOpen && isSmall ? "open" : "closed"}
      variants={isSmall ? menuSlider : ""}
      className="scrollbar-hidden absolute z-[5000] h-[93vh] w-2/3 flex-col gap-5 overflow-y-scroll bg-darkBg pb-3 backdrop-blur xs:static xs:h-fit xs:w-fit xs:pb-0"
    >
      <motion.ul
        animate={isMenuOpen ? "open" : "closed"}
        variants={ULlist}
        className="font-text text-lg font-bold text-lightText xs:flex xs:align-middle"
      >
        {navLinks}
      </motion.ul>
      {showCategory && isSmall && (
        <div>
          <h2 className="mb-2 text-center font-heading text-2xl font-extrabold text-lightText underline">
            Categories
          </h2>
          <motion.ul
            animate={isMenuOpen ? "open" : "closed"}
            variants={ULlist}
            className="overflow-hidden font-text text-lg font-bold text-lightText xs:flex xs:flex-col xs:align-middle"
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
