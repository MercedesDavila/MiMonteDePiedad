import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './DetalleCredito.css'
import logo from '../img/monte_logo.png';


class DetalleCredito extends Component {
    render() {
        return (
            <div className="detalleCredito-logo">
            <img src={logo} className="logo-detalles" alt="logo" />
            <section className="informacion">
                <h1 className="detalle-titulo">¿Este podría ser tu crédito?</h1>
                <div className="detalle-texto">
                   <p className="detalle-texto">Monto a solicitar $ 21,500.00</p>
                   <p className="detalle-texto">Monto a acreditar $ 20,004.00</p>
                   <p className="detalle-texto">Detalle de cuoata promedio $ 1,651</p>
                   <p className="detalle-texto">Plazo 18 meses</p>
                   <p className="detalle-texto">Tasa Nominal A nual (TNA) 35.50%</p>
                   <p className="detalle-texto">Costo Anual Total (CAT) s/IVA 59.06%</p>
                   <p className="detalle-texto">Costo Anual Total (CAT) c/IVA 71.68%</p>
                </div>
                <Link to="/detalles">
               <button type="submit" className="siguiente-btn">Calcular</button></Link>
            </section>
            </div>
            
        )
    }
}
export default DetalleCredito;