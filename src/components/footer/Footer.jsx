import React, { useState } from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { toast } from "react-toastify";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const logoutUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(!isLoading);
        toast.success("Logout successfully...");
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(!isLoading);
        toast.error(error.message);
      });
  };

  return (
    <>
      <footer className="footer">
        <div className="left">
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
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
