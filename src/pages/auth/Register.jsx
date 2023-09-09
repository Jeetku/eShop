import React, { useState } from "react";
import registerImage from "../../assets/register.png";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const naviagate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Registeration Successful....");
        setIsLoading(false);

        naviagate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });

    console.log(email, password, cPassword);
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className="container auth">
        <div className="form">
          <h2>Register</h2>
          <Card>
            <form onSubmit={registerUser}>
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
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button className="--btn --btn-primary --btn-block" type="submit">
                Register
              </button>
            </form>
          </Card>
          <span className="register">
            <h5>Already an account?</h5>
            <Link to="/login">Login</Link>
          </span>
        </div>
        <div className="img">
          <img src={registerImage} alt="Login" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;
