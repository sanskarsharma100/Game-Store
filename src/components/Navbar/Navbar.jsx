import { useContext } from "react";
import { ReactComponent as HamBtn } from "../../assets/ham.svg";
import { ReactComponent as CrossBtn } from "../../assets/cross.svg";
import { MainContext } from "../../Context/MainContext";
import Menubar from './Menubar';

function Navbar() {
  const { isMenuOpen, toggleMenu } =
    useContext(MainContext);

  const links = [
    { to: "store", name: "Home", id: "l1" },
    { to: "wishlist", name: "Wishlist", id: "l2" },
    { to: "cart", name: "Cart", id: "l3" },
  ];

  return (
    <nav className="w-full fixed z-50">
      <div className="xs:flex w-full relative bg-darkBg">
        <div className="flex justify-center bg-darkBg relative z-[9999] h-16">
          <div className="m-auto">
            <p className="font-heading text-2xl font-extrabold text-lightText w-fit m-auto p-1 border">
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
        <Menubar links={links}/>
      </div>
    </nav>
  );
}

export default Navbar;
