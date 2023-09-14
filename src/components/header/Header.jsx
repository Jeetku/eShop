import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { useDispatch } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";

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

  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Get the currently signed-in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        // const uid = user.uid;
        // console.log(user.displayName);
        if (user.displayName == null) {
          // const u1 = user.email.slice(0, -10);
          //? more modified u1
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            username: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  return (
    <>
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

                <a href="/">
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </a>
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
    </>
  );
};

export default Header;
