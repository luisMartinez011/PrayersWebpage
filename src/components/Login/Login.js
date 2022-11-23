import React, { Component } from 'react'
import '../../../src/assets/css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class 
 extends Component {
  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
        <h1>Ingrese Su Usuario Para Ingresar</h1>
        <div className="form-group">
        <label> usuario: </label>
        <br/>
        <input type="text" className="form-control"/>
        <br/>
        <label>Contraseña: </label>
        <br/>
        <input type="password" className="form-control" />
        <br/>
        <button className="btn btn-primary" to='/Login/Home' >Iniciar Sesion </button>
        </div>
        </div>
      </div>
    )
  }
}
