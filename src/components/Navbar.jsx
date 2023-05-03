import { motion, animate, useCycle } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  // const [open, setOpen] = useState(false);
  const links = [
    { to: "store", name: "Home", id: "l1" },
    { to: "wishlist", name: "Wishlist", id: "l2" },
    { to: "cart", name: "Cart", id: "l3" },
  ];

  function handleClose() {
    // setOpen(!open);
  }

  const variants = {
    open: {
      top: "100%"
    },
    closed: { top: "-200%" },
  };

  const navLinks = links.map((links) => (
    <motion.li key={links.id} whileHover={{scale: 1.4}} className="text-center m-2 hover:text-darkHover">
      <Link to={`/${links.to}`}>
        <p className="p-2">{links.name}</p>
      </Link>
    </motion.li>
  ));

  return (
    <div className="w-full fixed z-50">
      <div className="xs:flex w-full relative bg-darkBg">
        <div className="flex justify-center bg-darkBg relative z-50">
          <div className="m-auto">
            <p className="font-roboto text-2xl font-extrabold text-lightText w-fit m-auto p-3">
              GameStore
            </p>
          </div>
          <div
            className="my-auto mr-2 cursor-pointer space-y-1.5 xs:hidden"
            onClick={cycleOpen}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="#fff"
                
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="#fff"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            )}
          </div>
        </div>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={variants}
          className={`bg-darkBg ${
            !open ? `` : ``
          } xs:flex xs:justify-center absolute z-40 w-full`}
        >
          <ul className="text-lightText font-bold xs:flex xs:align-middle text-lg">
            {navLinks}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
