import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot.png";
const Reset = () => {
  return (
    <section className="container auth">
      <div className="img">
        <img src={resetImg} alt="Reset Password" width="400" />
      </div>

      <div className="form">
        <h2>Reset Password</h2>

        <form>
          <input type="text" placeholder="Email" required />

          <button type="submit" className="--btn --btn-primary --btn-block">
            Reset Password
          </button>
          <div className="link">
            <h5>
              <Link to="/login">- Login</Link>
            </h5>
            <h5>
              <Link to="/register">- Register</Link>
            </h5>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reset;
