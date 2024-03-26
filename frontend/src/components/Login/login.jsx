import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const Login = () => {
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

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
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
