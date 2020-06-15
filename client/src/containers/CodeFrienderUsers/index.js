import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Grid, Container, Responsive, Card } from 'semantic-ui-react';


import { getUserData } from './../../actions/profile';
import { getAllUsers } from '../../actions/users';
import requireAuth from '../../hoc/requireAuth';

import AllProfileHeader from '../../components/AllProfileHeader';
import UserProfile from './../../components/UserProfile';
import UsersCard from './UsersCard';

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
            <Grid.Column width={4}>
              <Responsive minWidth={768}>
                <UserProfile currentUser={this.props.currentUser} />
              </Responsive>
            </Grid.Column>
            <Grid.Column width={12} className='customScroll'>
              <Card.Group fluid stackable doubling itemsPerRow={3} >
                <UsersCard users={this.props.allUsers} />
              </Card.Group>
            </Grid.Column>
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
