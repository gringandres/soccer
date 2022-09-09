import React, { useState } from 'react'
import { goToPathnameUrl } from '../utils/helpers';

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
    console.log(window.location)
    e.preventDefault()
    const { user, password } = info
    if (!user && !password) {
      return alert('Ingrese todo los campos')
    }
    if (user === import.meta.env.VITE_CORREO && password === import.meta.env.VITE_PASSWORD) {
      goToPathnameUrl('/tournament/admin-info')
    } else {
      window.location.replace('/')
    }
  }

  return (
    <>
      <section style={{ margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', placeContent: 'center', height: '100vh' }}>
        <div style={{ gridColumn: '2' }} className="field">
          <input
            className="input"
            type="text"
            placeholder="User"
            value={info.user}
            name='user'
            onChange={handleInfo}
          />
        </div>
        <div style={{ gridColumn: '2' }} className="field">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={info.password}
            name='password'
            onChange={handleInfo}
          />
        </div>
        <div style={{ gridColumn: '2', margin: '0 auto' }} className="field">
          <button
            className="button is-success"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </section>
    </>
  )
}

export default Login