import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container } from 'semantic-ui-react';

import { getAllMatches } from './../../actions/users';
import { getUserData } from './../../actions/profile';
import { GET_MATCHES, GET_MATCHES_ERROR, GET_USER_DATA, GET_USER_DATA_ERROR } from '../../actions/types';

import MatchesCard from './MatchesCard';
import { fromAddress } from 'react-geocode';

class Match extends Component {

  async componentDidMount() {
    this.props.getAllMatches();
    this.props.getUserData();
  }

    render() {
      console.log(this.props.best.length);
      console.log(this.props.forMe.length);
      console.log(this.props.forThem.length);
      return (
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={4}>
                <p>Your Profile</p>
              </Grid.Column>
              <Grid.Column width={12} textAlign='center'>
                <Grid centered>
                  <Header>Best Matches</Header>
                  <Grid.Row columns={3}>
                    <p>Collaborate</p>
                    {this.props.best?.map((person) => <MatchesCard allMatches={person} />)}
                  </Grid.Row>
                  <Header>Best Matches For Them</Header>
                  <Grid.Row columns={3}>
                    <p>Mentor</p>
                    {this.props.forThem?.map((person) => <MatchesCard allMatches={person} />)}
                  </Grid.Row>
                  <Header>Best Matches For Me</Header>
                  <Grid.Row columns={3}>
                    <p>Apprentice</p>
                    {this.props.forMe?.map((person) => <MatchesCard allMatches={person} />)}
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
