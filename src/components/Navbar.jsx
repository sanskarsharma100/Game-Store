import { motion, animate, useCycle } from "framer-motion";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HamBtn } from "../assets/ham.svg";
import { ReactComponent as CrossBtn } from "../assets/cross.svg";
import genres from "../Utils/genres";
import { MainContext } from "../Context/MainContext";

function Navbar() {
  const {isMenuOpen, toggleMenu} = useContext(MainContext);

  const links = [
    { to: "store", name: "Home", id: "l1" },
    { to: "wishlist", name: "Wishlist", id: "l2" },
    { to: "cart", name: "Cart", id: "l3" },
  ];

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
      scale: 1.4,
      cursor: "pointer",
    },
    textTap: {
      scale: 1.2,
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
        y: { stiffness: 100, velocity: -100},
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
      whileHover="textHover"
      whileTap="textTap"
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuItemEffects}
      className="text-center m-2 hover:text-darkHover"
    >
      <motion.p variants={textEffect} className="p-2">
        {genres[item]}
      </motion.p>
    </motion.li>
  ));

  console.log("categories", categories);

  return (
    <nav className="w-full fixed z-50">
      <div className="xs:flex w-full relative bg-darkBg">
        <div className="flex justify-center bg-darkBg relative z-50 h-16">
          <div className="m-auto">
            <p className="font-roboto text-2xl font-extrabold text-lightText w-fit m-auto p-1 border">
              GameStore
            </p>
          </div>
          <div
            className="my-auto mr-2 cursor-pointer space-y-1.5 xs:hidden absolute right-0 translate-y-2/4"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CrossBtn /> : <HamBtn />}
          </div>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuSlider}
          className="bg-darkBg flex flex-col gap-10 absolute z-40 min-h-screen w-2/3 backdrop-blur"
        >
          <motion.ul
            animate={isMenuOpen ? "open" : "closed"}
            variants={ULlist}
            className="text-lightText font-bold xs:flex xs:align-middle text-lg overflow-hidden"
          >
            {navLinks}
          </motion.ul>
          <div>
            <h2 className="text-2xl text-lightText font-extrabold underline font-roboto text-center mb-2">
              Categories
            </h2>
            <motion.ul
              animate={isMenuOpen ? "open" : "closed"}
              variants={ULlist}
              className="text-lightText font-bold xs:flex xs:align-middle text-lg overflow-hidden"
            >
              {categories}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
