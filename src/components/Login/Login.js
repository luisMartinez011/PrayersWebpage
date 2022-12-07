import { useNavigate } from 'react-router-dom'
import '../../../src/assets/css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import Header from '../Header';
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
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <h1>Ingrese Su Usuario Para Ingresar</h1>
        <div className="form-group">
          <label> usuario: </label>
          <br />
          <input type="text" className="form-control" onChange={(e) => setemail(e.target.value)} />
          <br />
          <label>Contraseña: </label>
          <br />
          <input type="password" className="form-control" onChange={(e) => setpassword(e.target.value)} />
          <br />
          <button className="btn btn-primary" onClick={Logueo} registro={registro} >Iniciar Sesion </button>
          <br />
          <br />
          <button className="btn btn-primary" onClick={Registro} >Crear Cuenta </button>
        </div>
      </div>
    </div>
  )
}
export default Login
