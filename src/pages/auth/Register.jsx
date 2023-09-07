import React from "react";
import registerImage from "../../assets/register.png";
import "./Auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="container auth">
      <div className="form">
        <h2>Register</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="--btn --btn-primary --btn-block">Register</button>
        </form>
        <span className="register">
          <h6>Already an account?</h6>
          <Link to="/login">Login</Link>
        </span>
      </div>
      <div className="img">
        <img src={registerImage} alt="Login" width="400" />
      </div>
    </section>
  );
};

export default Register;
