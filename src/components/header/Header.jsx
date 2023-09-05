import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);
const cart = (
  <span className="cart">
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="header">
        {logo}
        <nav className={showMenu ? `${"show-nav"}` : `${"hide-nav"}`}>
          <div
            className={
              showMenu
                ? `${"nav-wrapper"}${"show-nav-wrapper"}`
                : `${"nav-wrapper"}`
            }
          ></div>

          <ul onClick={toggleMenu}>
            <li className="mobile-logo">{logo}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="header-right" onClick={toggleMenu}>
            <span className="links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Orders</Link>
            </span>
            {cart}
          </div>
        </nav>

        <div className="menu-icon">
          {cart}
          {showMenu ? (
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          ) : (
            <FaTimes size={28} color="#fff" onClick={toggleMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
