import { useContext } from "react";
import { ReactComponent as HamBtn } from "../../assets/ham.svg";
import { ReactComponent as CrossBtn } from "../../assets/cross.svg";
import { MainContext } from "../../Context/MainContext";
import Menubar from "./Menubar";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useContext(MainContext);
  const currLocation = useLocation();

  const links = [
    { to: "store", name: "Home", id: "l1" },
    { to: "wishlist", name: "Wishlist", id: "l2" },
    { to: "cart", name: "Cart", id: "l3" },
  ];

  return (
    <header>
      <nav className="fixed z-50 w-full">
        <div className="relative w-full bg-darkBg xs:flex">
          <div className="relative z-[9999] flex h-16 justify-center bg-darkBg">
            <div className="m-auto">
              <p className="m-auto w-fit border p-1 font-heading text-2xl font-extrabold text-lightText">
                GameStore
              </p>
            </div>
            <div
              className="absolute right-0 my-auto mr-2 translate-y-2/4 cursor-pointer space-y-1.5 xs:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CrossBtn /> : <HamBtn />}
            </div>
          </div>
          <Menubar
            links={links}
            showCategory={currLocation.pathname == "/store"}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
