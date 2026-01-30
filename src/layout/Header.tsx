import { NavLink } from "react-router-dom";

import Logo from "../assets/images/Logo.png";
import accIcon from "../assets/images/accIcon.png";
import searchIcon from "../assets/images/searchIcon.png";
import heartIcon from "../assets/images/heartIcon.png";
import cartIcon from "../assets/images/cartIcon.png";
import CartPopup from "../components/cartPopup/CartPopup";
import { useState } from "react";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  function closeCart() {
    setShowCart(false);
  }

  return (
    <header className="py-7.5 px-13.75 flex justify-between items-center">
      <div className="flex items-center justify-center gap-1.25">
        <img src={Logo} alt="default logo" className="max-w-12.5" />
        <h1 className="text-black font-bold text-[34px]">Furniro</h1>
      </div>
      <nav className="max-w-107.5 w-full">
        <ul className="flex items-center w-full justify-between">
          <li>
            <NavLink to={"/"} className="text-[16px] font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/shop"} className="text-[16px] font-medium">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="text-[16px] font-medium">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="text-[16px] font-medium">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-between max-w-62.5 w-full">
        <img src={accIcon} alt="icon" className="max-w-6 cursor-pointer" />
        <img src={searchIcon} alt="icon" className="max-w-6 cursor-pointer" />
        <img src={heartIcon} alt="icon" className="max-w-6 cursor-pointer" />
        <img
          src={cartIcon}
          alt="icon"
          className="max-w-6 cursor-pointer"
          onClick={() => {
            setShowCart(!showCart);
          }}
        />
      </div>

      {showCart && <CartPopup closeCart={closeCart} />}
    </header>
  );
}
