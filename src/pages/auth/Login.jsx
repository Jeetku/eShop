import React from "react";
import "./Auth.css";
import loginImage from "../../assets/login.png";

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
          <button className="--btn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
