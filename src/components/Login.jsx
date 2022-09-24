import React, { useState } from "react";
import { goToPathnameUrl } from "../utils/helpers";

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
      <section>
        <div style={{ gridColumn: "2" }}>
          <div>
            <input
              type="text"
              placeholder="User"
              value={info.user}
              name="user"
              onChange={handleInfo}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={info.password}
              name="password"
              onChange={handleInfo}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Login</button>
            <button onClick={() => goToPathnameUrl("/")}>Cancel</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
