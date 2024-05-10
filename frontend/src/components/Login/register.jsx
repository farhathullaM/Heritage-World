import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./LoginForm.css";

const register = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const validateName = (value) => {
    return /^[A-Za-z\s.]+$/.test(value);
    // Alphabets, blank spaces, and "." allowed
  };

  const validateEmail = (value) => {
    // Email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  function submit(e) {
    e.preventDefault();
    setIsSubmit((current) => {
      return !current;
    });

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
        <div className="head">Register</div>

        <form onSubmit={submit} className="register-form-sub">
          <label htmlFor="email" style={{ marginTop: "10px" }}>
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            onChange={(e) => {
              if (!validateEmail(e.target.value)) {
                e.target.setCustomValidity("Invalid email format");
              } else {
                e.target.setCustomValidity("");
              }
            }}
          />

          <label htmlFor="paswd" style={{ marginTop: "10px" }}>
            Password
          </label>
          <input
            name="paswd"
            type="password"
            id="paswd"
            minLength="6"
            pattern=".{6,}"
            required
            onChange={(e) => {
              if (e.target.value.length < 6) {
                e.target.setCustomValidity(
                  "Password must be at least 6 characters"
                );
              } else {
                e.target.setCustomValidity("");
              }
            }}
          />

          <label htmlFor="confirmPaswd" style={{ marginTop: "10px" }}>
            Confirm Password
          </label>
          <input
            name="confirmPaswd"
            type="password"
            id="confirmPaswd"
            minLength="6"
            required
            onChange={(e) => {
              if (e.target.value !== document.getElementById("paswd").value) {
                e.target.setCustomValidity("Passwords do not match");
              } else {
                e.target.setCustomValidity("");
              }
            }}
          />

          <label htmlFor="name" style={{ marginTop: "10px" }}>
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            required
            onChange={(e) => {
              if (!validateName(e.target.value)) {
                e.target.setCustomValidity(
                  "Name should contain only alphabets"
                );
              } else {
                e.target.setCustomValidity("");
              }
            }}
          />

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
              <input
                type="submit"
                value="Register"
                style={{ marginTop: "25px" }}
                className="inp"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
