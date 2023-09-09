import React, { useState } from "react";
import "./Auth.css";
import loginImage from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const naviagate = useNavigate();

  const loginConfirmed = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(isLoading);
        const user = userCredential.user;
        alert(user.email);

        naviagate("/");
        toast.success("Login confirmed");
      })
      .catch((error) => {
        setIsLoading(isLoading);
        toast.error("User credentials not correct", error);
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className="container auth">
        <div className="img">
          <img src={loginImage} alt="Login" width="400" />
        </div>
        <div className="form">
          <h2>Login</h2>
          <Card>
            <form onSubmit={loginConfirmed}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="--btn --btn-primary --btn-block" type="submit">
                Login
              </button>
              <div className="link">
                <Link to="/reset">Forgot Password</Link>
              </div>
              <h5>-- or --</h5>
            </form>

            <button className="--btn --btn-danger --btn-block">
              <FaGoogle color="#fff" /> Login with Google
            </button>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Login;
