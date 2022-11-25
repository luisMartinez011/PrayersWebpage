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
        history("/Registro")
    }
    return(
        <div className="containerPrincipal">
        <div className="containerSecundario">
        <h1>Ingrese Su Usuario Para Registrarse</h1>
        <div className="form-group">
        <label> correo: </label>
        <br/>
        <input type="text" value = {email} className="form-control" onChange={(e) => setemail(e.target.value)} />
        <br/>
        <label>Contraseña: </label>
        <br/>
        <input type="password" value = {password} className="form-control" onChange={(e) => setpassword(e.target.value)} />
        <br/>
        <input type="text" value = {name} className="form-control" onChange={(e) => setname(e.target.value)} />
        <label> nombre: </label>
        <br/>
        <button className="btn btn-primary" onClick={SignUp}>Registrarse </button>
        </div>
        </div>
      </div>
    )
}
export default Registro
