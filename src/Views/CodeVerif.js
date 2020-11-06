import React, { Component } from 'react';
import VerifNum from '../Components/VerifNume';
import '../App.css';

class CodeVerif extends Component {
  render() {
    return (
      <div className="verification-screen">
        <div className="backg-img">
          
          <h1 className="verif-text" >Te enviaremos un sms con un código de 6 digitos.</h1>
          <h2 className="verif-text2" >Por favor introducelo.</h2>
          <VerifNum />

        </div>
      </div>
    );
  }
}

export default CodeVerif;