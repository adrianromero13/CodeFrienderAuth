import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Grid, Container, Responsive, Card } from 'semantic-ui-react';


import { getUserData, getOtherUsers } from './../../actions/profile';
import requireAuth from '../../hoc/requireAuth';

import AllProfileHeader from '../../components/AllProfileHeader';
import UserProfile from './../../components/UserProfile';
import UsersCard from './UsersCard';

import './scrollableContainer.css';

class AllCodeFrienders extends Component {

  componentDidMount() {
    this.props.getUserData();
    this.props.getOtherUsers();
  }

  render() {
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
                <UsersCard users={this.props.filteredUsers} />
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
    filteredUsers: state.filteredUsers.getOtherUsers,
    getUsersError: state.users.getUsersError
  };
}

export default compose(
  connect(mapStateToProps, { getUserData, getOtherUsers }),
  requireAuth
)(AllCodeFrienders);
