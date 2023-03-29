import { useNavigate } from 'react-router-dom'
import '../../../src/assets/css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
function Login() {
  let registro;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
    }
  }, []

  )
  async function Logueo() {
    console.warn(email, password)
    let item = { email, password };
    let result = await fetch("https://whispering-hollows-99018.herokuapp.com/usuarios/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify(item)
    })

    result = await result.json();
    console.log(result);
    localStorage.setItem("user-info", JSON.stringify(result))
    history("/home")
    registro = 1;
  }
  async function Registro() {
    history("/Registro")
  }
  return (
      <div className="align">
        <div className="grid align__item">
          <div className="register">
            <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84"
                 viewBox="77.7 214.9 274.7 412">
              <defs>
                <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                  <stop offset="0%" stop-color="#8ceabb"/>
                  <stop offset="100%" stop-color="#378f7b"/>
                </linearGradient>
              </defs>
              <path fill="url(#a)"
                    d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/>
            </svg>
            <h2>Iniciar Sesion</h2>
            <div className="form">
              <div className="form__field">
            <label>Usuario:</label>
            <input type="email" placeholder="info@mailaddress.com" onChange={(e) => setemail(e.target.value)} />
              </div>
              <div className="form__field">
            <label>Contraseña: </label>
            <input type="password" placeholder="••••••••••••" onChange={(e) => setpassword(e.target.value)} />
              </div>
            <button className="btn-primary" onClick={Logueo} registro={registro} >Iniciar Sesion </button>
            </div>
            <p>No tienes cuenta? <a onClick ={Registro}> Crear Cuenta</a></p>
        </div>
      </div>
      </div>

)
}
export default Login
