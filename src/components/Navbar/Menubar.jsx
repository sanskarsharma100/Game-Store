import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useIsSmall } from "./../../Utils/constants";
import Categories from "./../Categories";

function Menubar({ links, showCategory }) {
  const { isMenuOpen, setIsMenuOpen } = useContext(MainContext);
  const isSmall = useIsSmall();
  // const isSmall = useMediaQuery("(max-width: 480px)");

  useEffect(() => {
    if (!window.matchMedia("(max-width: 480px)").matches) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [isSmall, setIsMenuOpen]);

  const menuSlider = {
    open: {
      opacity: 0.75,
      right: "0%",
      display: "block",
      transition: {
        ease: [0.52, 0.84, 0.4, 1.19],
        duration: 0.4,
      },
      transitionEnd: {
        display: "block",
      },
    },
    closed: {
      opacity: 0,
      right: "-100%",
      transition: {
        ease: [0.26, -0.01, 1, -0.54],
        duration: 0.4,
      },
      transitionEnd: {
        display: "none",
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
      transition: { staggerChildren: 0.07, delayChildren: 0.9 },
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
      className="m-0.5 text-center hover:text-darkHover ss:m-2"
    >
      <NavLink
        to={`/${links.to}`}
        end
        className={({ isActive }) => (isActive ? "activeRoute" : "")}
      >
        <motion.p variants={textEffect} className="p-1">
          {links.name}
        </motion.p>
      </NavLink>
    </motion.li>
  ));

  return (
    <motion.div
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuSlider}
      className="scrollbar-hidden absolute z-[5000] h-[93vh] w-2/3 flex-col gap-5 overflow-x-hidden overflow-y-scroll bg-darkBg pb-3 pt-1 backdrop-blur xs:static xs:my-auto xs:ml-auto xs:h-fit xs:w-fit xs:pb-0 xs:pt-0"
    >
      <motion.ul
        animate={isMenuOpen ? "open" : "closed"}
        variants={ULlist}
        className="m-auto font-content text-lg font-bold text-lightText xs:flex xs:justify-center xs:align-middle"
      >
        {navLinks}
      </motion.ul>
      {showCategory && isSmall && (
        <div className="px-4">
          <Categories
            ULlist={ULlist}
            menuItemEffects={menuItemEffects}
            textEffect={textEffect}
          />
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
