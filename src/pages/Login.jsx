import React, { useState } from "react";
import loginLogo from "/login-img2.jpg";
import FormLogin from "../components/Form/FormLogin";


import "./Login.css";


const Login = () => {
  const styles = `
  .container-fluid {
    padding-left:0px;
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container-fluid justify-content-end">
        <div className="row align-items-center">
          <div className="col-md-6 d-none d-md-block">
            <img
              src={loginLogo}
              alt="background"
              style={{
                width: "100%",
                maxHeight: "100vh", // Atur tinggi maksimal gambar agar sesuai dengan tinggi layar
                objectFit: "cover",
              }}
            />
          </div>

          <div className="log col-md-6 col-lg-5 col-md-5 mx-auto">
            <div className="row">
              <FormLogin/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
