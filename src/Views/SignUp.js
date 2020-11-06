import React, { Component } from 'react';
import Signup from '../Components/Sigupform';
import logo from "../img/monte_logo.png";
import '../App.css';



class SignUp extends Component {
    render() {
        return (
            <div className="signup-screen">
            <div className="backg-img">
          <img src={logo} className="logo-signup" alt="logo" />    
          <h1 className="greeting-login">Registrarse</h1>
          <Signup />
              </div>
          </div>
        );
    }
}

export default SignUp;