import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const register = () => {
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", e.target.email.value);
    formData.append("password", e.target.paswd.value);
    formData.append("phone", e.target.pno.value);
    formData.append("name", e.target.name.value);

    axios
      .post("users/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
  return (
    <div className="login">
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}

      <div className="login-form">
        <div className="head">Register</div>

        <form onSubmit={submit} className="register-form-sub">
          <label htmlFor="email" style={{ marginTop: "10px" }}>
            Email
          </label>
          <input name="email" type="email" id="email" required />

          <label htmlFor="paswd" style={{ marginTop: "10px" }}>
            Password
          </label>
          <input name="paswd" type="password" id="paswd" required />

          <label htmlFor="name" style={{ marginTop: "10px" }}>
            Name
          </label>
          <input name="name" type="text" id="name" required />

          <label htmlFor="pno" style={{ marginTop: "10px" }}>
            Phone
          </label>
          <input
            name="pno"
            type="tel"
            id="pno"
            pattern="(\+\d{2})?\d{10}"
            title="Please enter a valid phone number"
            required
          />

          <div className="login-sub">
            <input
              type="submit"
              value="Register"
              style={{ marginTop: "25px" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
