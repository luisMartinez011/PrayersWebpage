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
                    <svg className="site__logo" width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9.47256V6.26286C4 5.92383 4.21369 5.62162 4.53332 5.50861L7.73332 4.3772C8.25389 4.19314 8.80587 4.5903 8.9971 5.10828C9.44791 6.32939 10.6223 7.20005 12 7.20005C13.3777 7.20005 14.5521 6.3294 15.0029 5.10828C15.1941 4.5903 15.7461 4.19314 16.2667 4.3772L19.4667 5.50861C19.7863 5.62163 20 5.92383 20 6.26286V9.47256C20 9.99301 19.5109 10.3749 19.006 10.2487L17.794 9.94569C17.2891 9.81946 16.8 10.2013 16.8 10.7218V19.2972C16.8 19.739 16.4418 20.0972 16 20.0972H8C7.55817 20.0972 7.2 19.739 7.2 19.2972V10.7218C7.2 10.2013 6.71089 9.81946 6.20597 9.94569L4.99403 10.2487C4.48911 10.3749 4 9.99302 4 9.47256Z" stroke="#4f7a28" stroke-width="0.8"></path> </g></svg>
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
