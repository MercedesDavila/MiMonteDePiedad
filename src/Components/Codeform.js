import React, { Component } from "react";
import { Link } from "react-router-dom";


class CodeForm extends Component {
  
  
  render() {
    return (
      <form className="input-btn-form">
        
        <input
          placeholder="   Usuario"
          name="noEmpleado"
          className="input-login"
          type="text"
          onChange={this.onChange}
        />
        <input
          placeholder="   Contraseña"
          name="noEmpleado"
          className="input-login"
          type="password"
          onChange={this.onChange}
        />
        <br></br>
        <Link to="/SignUp">
        <button type="button" className="btn-green" >
          Ingresar
        </button>
         </Link>
      </form>
    );
  }
}

export default CodeForm;