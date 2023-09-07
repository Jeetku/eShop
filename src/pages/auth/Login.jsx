import React from "react";
import "./Auth.css";
import loginImage from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <section className="container auth">
      <div className="img">
        <img src={loginImage} alt="Login" width="400" />
      </div>
      <div className="form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="--btn --btn-primary --btn-block">Login</button>
          <div className="link">
            <Link to="/reset">Forgot Password</Link>
          </div>
          <h5>-- or --</h5>
        </form>
        <button className="--btn --btn-danger --btn-block">
          <FaGoogle color="#fff" /> Login with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
