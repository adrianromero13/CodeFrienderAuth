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

class App extends Component {
  render () {
    return (
      <div>
        {/* <Banner/> */}
        <Route exact path='/homepage' component={HomePage}/>
        <Route exact path='/profile' component={Banner}/>
        <Route exact path='/match' component={Banner}/>
        <Route exact path='/signUp' component={Banner}/>
        <Route exact path='/home' component={SignIn}/>
        <Route exact path='/signOut' component={SignOut}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/profile' component={AllCodeFrienders}/>
        <Route exact path='/match' component={Match}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
