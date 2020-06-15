import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from '../SignUp';
import SignOut from '../SignOut';
import { connect } from 'react-redux';

import AllCodeFrienders from './../CodeFrienderUsers'
import Match from './../Match'
import Banner from '../Banner';
import HomePage from '../HomePage';
import CreateEvent from '../CreateEvent';
import EventsPage from '../../components/EventsPage';
import Messages from '../Messages';
import JoinEvent from '../JoinEvent';
import './ImageBackGround.css';
import MyProfile from '../MyProfile';

class App extends Component {

  renderWithBanner() {
    return(
      <div>
        <Banner/>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signout' component={SignOut} />
        <Route exact path='/profile' component={AllCodeFrienders} />
        <Route exact path='/match' component={Match} />
        <Route exact path='/createevent' component={CreateEvent} />
        <Route exact path='/eventspage' component={EventsPage} />
        <Route exact path='/messages' component={Messages} />
        <Route exact path='/joinevent' component={JoinEvent} />
        <Route exact path='/myprofile' component={MyProfile} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route component={this.renderWithBanner} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
