import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Proyecto from '../Proyecto';
import Login from '../Login';
import SignUp from '../SignUp';

import Main from '../../containers/Layout/Main';
import Authentication from '../../containers/Layout/Authentication';

class Browser extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Main exact path="/" {...this.props} component={Proyecto} />
          

          <Authentication exact path="/login" {...this.props} component={Login} />
          <Authentication exact path="/signup" {...this.props} component={SignUp} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default Browser;
