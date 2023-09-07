import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="left">
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="center">
          <h1>
            e <span>Shop</span>.
          </h1>
          <div className="copyright">&copy;{year} Made by Jeetesh</div>
        </div>

        <div className="right">
          <div className="socials">
            <h4>Socials</h4>
            <ul>
              <li>
                <Link href="/">
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <a href="/">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsDiscord />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
