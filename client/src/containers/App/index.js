import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

// import Counter from '../Counter';
// import AllTodosList from '../AllTodosList';
// import UserTodoList from '../UserTodoList';

import SignUp from '../SignUp';
// import SignOut from '../SignOut';
// import SignIn from '../SignIn';
// import Navbar from './../../components/Navbar';
import AllCodeFrienders from './../CodeFrienderUsers'

import Match from './../Match'

import { connect } from 'react-redux';
import Banner from '../../components/Banner';

class App extends Component {
  render () {
    return (
      <div>
        <Banner/>
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
