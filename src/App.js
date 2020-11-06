import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Views/Home';
import LogIn from './Views/LogIn';
import SignUp from './Views/SignUp';
import CodeVerif from './Views/CodeVerif';
import FormSobreTi from './Views/FormSobreTi';
import FormPlanes from './Views/FormPlanes';
import DetalleCredito from './Views/DetalleCredito';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';
import CrediMonte from './Views/CrediMonte';
import Credits from './Views/Credits';

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route  path='/SignUp' component={SignUp} />
          <Route  path='/CodeVerif' component={CodeVerif} />
          <Route  path='/inicio' component={Home} /> 
          <Route  path='/sobreti' component={FormSobreTi} />
          <Route  path='/tusplanes' component={FormPlanes} />
          <Route  path='/propuesta' component={CreditProposal} />
          <Route  path='/pago' component={Payment} />
          <Route  path='/tucredimonte' component={CrediMonte} />
          <Route  path='/tuscreditos' component={Credits} />
        </Switch>
      </Router>
    );
  }
}

export default App;
