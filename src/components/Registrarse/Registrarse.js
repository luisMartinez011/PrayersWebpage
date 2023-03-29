import { useNavigate } from 'react-router-dom'
import '../../../src/assets/css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState, useEffect } from 'react'

function Registro()
{
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const[name,setname] = useState("");
    const history = useNavigate();

    async function SignUp()
    {
        let item = {email,password,name}
        console.warn(item)
        let result = await fetch("https://whispering-hollows-99018.herokuapp.com/usuarios/signup",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{"Content-Type":'application/json',"Accept":'*/*'}
    })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history("/")
    }
    return(
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
                    <h2>Registro</h2>
                    <div className="form">
                        <div className="form__field">
                            <label>Nombre:</label>
                            <input type="text" placeholder="Juan Perez" value = {name} className="form-control" onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="form__field">
                            <label>Correo: </label>
                            <input type="email" placeholder="info@mailaddress.com" value = {email} className="form-control" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="form__field">
                            <label>Contraseña: </label>
                            <input type="password" placeholder="••••••••••••" value = {password} className="form-control" onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <button className="btn-primary" onClick={() => SignUp()}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registro
