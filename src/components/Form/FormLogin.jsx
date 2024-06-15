import "./FormLogin.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "../../pages/Login.css";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // New state variable for loading
  const navigateTo = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       "https://bnsp-be-production.up.railway.app/api/v1/admin/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     localStorage.setItem("token", response.data.data.token);
  //     navigateTo("/admin");
  //   } catch (error) {
  //     setError("Invalid email or password");
  //     setLoading(false); // Stop loading
  //   }   
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "https://bnsp-be-production.up.railway.app/api/v1/admin/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("userEmail", email); // Save email to localStorage
      navigateTo("/admin");
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="login fw-bold">Masuk Sebagai Admin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="mb-1">Email</p>
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="login__form form-control"
            placeholder="Contoh: johndoe@gmail.com"
            aria-label="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ fontFamily: "Poppins" }}
          />
        </div>
        <div className="d-flex">
          <div className="pass">
            <p style={{ marginBottom: "0px" }}>Password</p>
          </div>
        </div>

        <div className="input-group mb-2 mt-1">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Masukkan password"
            aria-label="Password"
            className="login__form form-control password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ fontFamily: "Poppins" }}
          />
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
          </span>
        </div>
        {error && (
          <Button
            variant="danger"
            className="error-button d-flex justify-content-center error-message fade-out align-items-center"
            onClick={() => setError("")}
            style={{ width: "200px", fontSize: "13px", textAlign: "center" }}
          >
            {error}
          </Button>
        )}
        <div className="d-grid gap-2 mt-5">
          <button
            className="login__btn btn lg sign-up fw-bold text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
