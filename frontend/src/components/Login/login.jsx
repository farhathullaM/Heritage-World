import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./LoginForm.css";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  function submit(e) {
    e.preventDefault();

    setIsSubmit((current) => {
      return !current;
    });

    const formData = new FormData();
    formData.append("email", e.target.email.value);
    formData.append("password", e.target.paswd.value);

    axios
      .post("users/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res?.data.auth) {
          const token = "Bearer " + res.data.token;
          localStorage.setItem("token", token);
          navigate("/manage/ListMonuments");
        } else {
          alert("Login Failed");
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err.response?.data.message);
        setIsSubmit((current) => {
          return !current;
        });
      });
  }
  return (
    <div className="login">
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}

      <div className="login-form">
        <form onSubmit={submit} className="login-form-sub">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" />

          <label htmlFor="paswd">Password</label>
          <input name="paswd" type="password" id="paswd" required />

          <div className="login-sub">
            {isSubmit ? (
              <div className="inp load">
                <ClipLoader
                  color="white"
                  // loading={isLoginClicked}
                  cssOverride={true}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <input type="submit" className="inp" value="Login" name="log" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
