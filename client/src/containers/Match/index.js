import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Flexbox from 'flexbox-react';
import { Grid, Header, Container } from 'semantic-ui-react';

import requireAuth from './../../hoc/requireAuth';
import { getAllMatches } from '../../actions/Users';
import { getUserData } from './../../actions/profile';

import UserProfile from './../../components/UserProfile';
import UsersCard from './../CodeFrienderUsers/UsersCard';
import AllProfileHeader from '../../components/AllProfileHeader';

import './../CodeFrienderUsers/scrollableContainer.css';
import './style.css';

class Match extends Component {
  state = {
    red: 'red',
    teal: 'teal',
    yellow: 'yellow',
  }

  async componentDidMount() {
    await this.props.getAllMatches();
    await this.props.getUserData();
  }

  render() {
    const { red, teal, yellow } = this.state;
    return (
      <Container>
        <Grid columns={2}>
          <AllProfileHeader />
        </Grid>
        <Grid columns={2} padded='vertically'>
          <Grid.Row>
            <Grid.Column width={4}>
              <UserProfile currentUser={this.props.currentUser} />
            </Grid.Column>
            <Grid.Column width={12} className='customScroll'>
              <Grid padded >
                <Header>Collaborate</Header>
                <Grid.Row columns={3}>
                  <Flexbox element="header" height='auto' className='scrolling-wrapper-flexbox'>
                    <UsersCard users={this.props.best} color={teal} />
                  </Flexbox>
                </Grid.Row>
                <Header>Mentor</Header>
                <Grid.Row columns={3}>
                  <Flexbox element='card' height='auto' className='scrolling-wrapper-flexbox'>
                    <UsersCard users={this.props.forThem} color={yellow} />
                  </Flexbox>
                </Grid.Row>
                <Header>Apprentice</Header>
                <Grid.Row columns={3}>
                  <Flexbox element='card' height='auto' className='scrolling-wrapper-flexbox'>
                    <UsersCard users={this.props.forMe} color={red} />
                  </Flexbox>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  };
};


function mapStateToProps(state) {
  return {
    forMe: state.matches.allMatches.forMe,
    forThem: state.matches.allMatches.forThem,
    best: state.matches.allMatches.best,
    allMatchesError: state.matches.allMatchesError,
    currentUser: state.currentUser.getUserData,
    getCurrentUserError: state.currentUser.getServerError,
    getServerError: state.currentUser.getClientError,
  };
}

export default compose(
  connect(mapStateToProps, { getAllMatches, getUserData }),
  requireAuth
)(Match);
