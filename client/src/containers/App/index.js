import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

// import Counter from '../Counter';
// import AllTodosList from '../AllTodosList';
// import UserTodoList from '../UserTodoList';

import SignUp from '../SignUp';
import SignOut from '../SignOut';
// import SignOut from '../SignOut';
// import SignIn from '../SignIn';
// import Navbar from './../../components/Navbar';
import { connect } from 'react-redux';

import SignIn from './../SignIn';
import AllCodeFrienders from './../CodeFrienderUsers'
import Match from './../Match'
import Banner from '../Banner';
import HomePage from '../HomePage';
import CreateEvent from '../CreateEvent';
import EventsPage from '../../components/EventsPage';
import './ImageBackGround.css';

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/profile' component={Banner}/>
        <Route exact path='/createevent' component={Banner}/>
        <Route exact path='/match' component={Banner}/>
        <Route exact path='/eventspage' component={Banner}/>
        <Route exact path='/signup' component={Banner}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signout' component={SignOut}/>
        <Route exact path='/profile' component={AllCodeFrienders}/>
        <Route exact path='/match' component={Match}/>
        <Route exact path = '/createevent' component = {CreateEvent} />
        <Route exact path = '/eventspage' component = {EventsPage} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
