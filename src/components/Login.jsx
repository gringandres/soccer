import React, { useState } from "react";
import { goToPathnameUrl } from "../utils/helpers";
import "../style.css";

const Login = () => {
  const [info, setInfo] = useState({
    user: "",
    password: "",
  });

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, password } = info;
    if (!user && !password) {
      return alert("Ingrese todo los campos");
    }
    if (
      user === import.meta.env.VITE_CORREO &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      sessionStorage.setItem("token", import.meta.env.VITE_CORREO);
      goToPathnameUrl("/tournament/admin-info");
    } else {
      window.location.replace("/");
    }
  };

  return (
    <>
      <section className="login-container background-banner1">
        <div className="box p-5" style={{ gridColumn: "2" }}>
          <div className="field">
            <input
              className="input"
              type="text"
              placeholder="User"
              value={info.user}
              name="user"
              onChange={handleInfo}
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={info.password}
              name="password"
              onChange={handleInfo}
            />
          </div>
          <div className="field is-flex is-justify-content-center mt-5">
            <button className="button button-team-blue" onClick={handleSubmit}>
              Login
            </button>
            <button
              className="button button-team-blue ml-3"
              onClick={() => goToPathnameUrl("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
