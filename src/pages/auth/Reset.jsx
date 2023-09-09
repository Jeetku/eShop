import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import { auth } from "../../firebase/Config";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  const updatePasswords = (e) => {
    e.preventDefault();
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        toast.success("Reset Password Link send successfully...");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(true);
        // ..
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className="container auth">
        <div className="img">
          <img src={resetImg} alt="Reset Password" width="400" />
        </div>

        <div className="form">
          <h2>Reset Password</h2>
          <Card>
            <form onSubmit={updatePasswords}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

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
          </Card>
        </div>
      </section>
    </>
  );
};

export default Reset;
