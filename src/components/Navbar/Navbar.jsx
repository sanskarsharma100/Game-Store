import { useContext } from "react";
import { ReactComponent as HamBtn } from "../../assets/ham.svg";
import { ReactComponent as CrossBtn } from "../../assets/cross.svg";
import { MainContext } from "../../Context/MainContext";
import Menubar from "./Menubar";
import StoreLogo from "../../assets/store-logo.png";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { isMenuOpen, toggleMenu } = useContext(MainContext);
  const currLocation = useLocation();

  const links = [
    { to: "store", name: "Home", id: "l1" },
    { to: "wishlist", name: "Wishlist", id: "l2" },
    { to: "cart", name: "Cart", id: "l3" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full bg-darkBg xs:px-4">
        <div className="relative m-auto px-2 xs:flex xs:justify-between">
          <div className="relative z-[9999] flex h-16 justify-center bg-darkBg">
            <div className="m-auto" role="banner">
              <img
                src={StoreLogo}
                alt="Game Store Logo"
                className="m-auto w-40"
              />
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
