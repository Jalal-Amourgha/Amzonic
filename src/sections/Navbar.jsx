import { navLinks, mobileLinks } from "../constants";
import { heart, cart, menu } from "../assets/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../context/AppContext";

const Navbar = () => {
  const { numberOfWishlist } = useGlobalContext();
  const [showNavbar, setShowNavbar] = useState(false);
  const handelNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-3 bg-white z-50 border-b-2 border-b-color">
      <div className="container">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-3xl font-bold">
            Amazonic
          </a>
          <ul className="list-none hidden lg:flex p-0 m-0 items-center">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="p-1 mx-3 text-xl hover:text-main-color"
              >
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center ">
            {/* <div className="relative w-[260px]">
              <input
                type="text"
                className="bg-gray outline-none px-3 py-2 w-full"
                placeholder="What are you looking for?"
              />
              <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
            </div> */}
            <div className="relative mr-4">
              <Link to="wishlist">
                <img
                  src={heart}
                  className="h-[30px] w-[30px] cursor-pointer"
                  alt="heart icon"
                />
              </Link>
              <div className="absolute top-[-10px] right-[-10px] flex justify-center items-center  h-[20px] w-[20px] bg-main-color text-white rounded-full">
                {numberOfWishlist}
              </div>
            </div>

            <div>
              <Link to="cart">
                <img
                  src={cart}
                  className="h-[30px] w-[30px] cursor-pointer"
                  alt="cart icon"
                />
              </Link>
            </div>
          </div>
          <div className="lg:hidden block">
            <img
              src={menu}
              className="w-[24px] h-[24px]"
              alt="menu icon"
              onClick={handelNavbar}
            />
            <div
              className={`absolute top-[60px] z-30 overflow-hidden left-0 w-full bg-white flex justify-center items-center duration-500 ${
                showNavbar ? "h-[92vh] block" : "h-[0px] "
              }`}
            >
              <ul className="list-none p-0 m-0 items-center">
                {mobileLinks.map((link) => (
                  <li
                    key={link.label}
                    className="p-1 my-10 text-center text-xl hover:text-main-color"
                  >
                    <Link>
                      <a href="/" onClick={handelNavbar}>
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
