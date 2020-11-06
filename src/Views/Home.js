import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import BreadCrumb from '../Components/Home/BreadCrumbs';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <img src={logo} className="home-logo" alt="logo" />
                <BreadCrumb className="options-box" />
                <section>
                    <Button color="info" className="btn-options">
                        <Link to="/sobreti">
                            <p>Solicitud de CrediMonte</p>
                        </Link>
                    </Button>
                    <Button color="info" className="btn-options">
                        <Link to="/tucredimonte">
                        <p>Tu CrediMonte</p>
                        </Link>
                    </Button>
                </section>
            </div>
        );
    }
}

export default Home;