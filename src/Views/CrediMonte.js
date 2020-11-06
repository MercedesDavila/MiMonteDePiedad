import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class CrediMonte extends Component {
    render() {
        return (
            <div className="home-box">
                <Link to="/inicio" className="brand-box back-icon">
                    <i className="fas fa-chevron-left"></i>
                </Link>
                <img src={logo} className="home-logoCredi" alt="logo" />
                <p className="title-CrediMonte">Tu CrediMonte</p>
                <section>
                    <Button color="info" className="btn-options">
                        <Link to="/tuscreditos">
                            <p>Tus créditos</p>
                        </Link>
                    </Button>
                    <Button color="info" className="btn-options">
                        <p>Consulta de estados de Cuenta</p>
                    </Button>
                </section>
            </div>
        );
    }
}

export default CrediMonte;