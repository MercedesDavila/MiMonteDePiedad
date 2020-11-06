import React, { Component } from "react";
import { Link } from "react-router-dom";


class Signup extends Component {
  
  
  render() {
    return (
      <form className="input-btn-form">
        <div className="inputnombres">
        <input
          placeholder="  Primer nombre"
          name="nombre"
          className="input-namelogin"
          type="text"
          onChange={this.onChange}
        />
        <input
          placeholder="  Segundo nombre"
          name="snombre"
          className="input-namelogin"
          type="text"
          onChange={this.onChange}
        />
        
          <input
          placeholder=" Apellido Paterno"
          name="snombre"
          className="input-login"
          type="text"
          onChange={this.onChange}
        />
          <input
          placeholder="  Apellido Materno"
          name="ombre"
          className="input-login"
          type="text"
          onChange={this.onChange}
        />

        </div>
         <input
          placeholder="   e-mail"
          name="email"
          className="input-login"
          type="text"
          onChange={this.onChange}
        />
        <input
          placeholder="   Número celular"
          name="ccontraseña"
          className="input-login"
          type="number"
          onChange={this.onChange}
        />
        <input
          placeholder="   Contraseña"
          name="contraseña"
          className="input-login"
          type="password"
          onChange={this.onChange}
        />
        <input
          placeholder="   Confirmar contraseña"
          name="ccontraseña"
          className="input-login"
          type="password"
          onChange={this.onChange}
        />
        <Link to="/CodeVerif">
        
       <h1 className="tel-verif">
       
       Te enviaremos un codigo SMS para verificar tu telefono</h1>


        <button type="button" className="btn-signup" >
          Enviar
        </button>
         </Link>
      </form>
    );
  }
}

export default Signup;