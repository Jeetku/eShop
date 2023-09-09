import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { toast } from "react-toastify";

const activeLink = ({ isActive }) => (isActive ? `${"active"}` : "");
export const logo = (
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
    <NavLink to="/cart" className={activeLink}>
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </NavLink>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const naviagate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logoutUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully...");
        naviagate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="header-right" onClick={toggleMenu}>
            <span className="links">
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activeLink}>
                My Orders
              </NavLink>

              <NavLink to="/" onClick={logoutUser}>
                {" "}
                Logout
              </NavLink>
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
