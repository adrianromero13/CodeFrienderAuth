import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Grid, Container, Responsive, Card } from 'semantic-ui-react';

// import axios from 'axios';

import requireAuth from '../../hoc/requireAuth';
import { getAllUsers } from '../../actions/users';
import { getUserData } from './../../actions/profile';


import { GET_USERS, GET_USERS_ERROR } from '../../actions/types';

import AllProfileHeader from '../../components/AllProfileHeader';
import UsersCard from './UsersCard';
import UserProfile from './../../components/UserProfile';

import './scrollableContainer.css';

class AllCodeFrienders extends Component {

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getUserData();
  }

  render() {
    console.log('find currentUser', this.props.currentUser);
    return (
      <Container>
        <Grid columns={2}>
          <AllProfileHeader />
        </Grid>
        <Grid.Row>
          <Grid columns={2} Container stackable centered>
            {/* <Grid.Column> */}

                <Grid.Column width={4}>
            <Responsive minWidth={768}>

                {/* this minWidth hides component if screen reaches less than 768 */}
                <UserProfile currentUser={this.props.currentUser} />

                {/* <Responsive> */}
            </Responsive>
                </Grid.Column>
            {/* </Grid.Column> */}

            <Grid.Column width={12} className='customScroll'>
              {/* create responsive for smaller screens */}
              <Card.Group fluid stackable doubling itemsPerRow={3} >
                <UsersCard users={this.props.allUsers} />
              </Card.Group>
            </Grid.Column>
            {/* </Responsive> */}
          </Grid>
        </Grid.Row>
      </Container>
    )
  }
};


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.getUserData,
    allUsers: state.users.allUsers,
    getUsersError: state.users.getUsersError
  };
}


export default compose(
  connect(mapStateToProps, { getAllUsers, getUserData }),
  requireAuth
)(AllCodeFrienders);
