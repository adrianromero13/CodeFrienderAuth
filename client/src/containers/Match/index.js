import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container, Card } from 'semantic-ui-react';

import { getAllMatches } from './../../actions/users';
import { getUserData } from './../../actions/profile';
// import { GET_MATCHES, GET_MATCHES_ERROR, GET_USER_DATA, GET_USER_DATA_ERROR } from '../../actions/types';

import UserProfile from './../../components/UserProfile';
import MatchesCard from './MatchesCard';
// import { fromAddress } from 'react-geocode';

import './style.css';

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
               <UserProfile currentUser={this.props.currentUser}/>
              </Grid.Column>
              <Grid.Column width={12} textAlign='center'>
                <Grid centered>
                  <Header>Best Matches</Header>
                  <Grid.Row columns={3}>
                    <Card.Group itemsPerRow={3}>
                    {this.props.best?.map((person) => <MatchesCard allMatches={person} />)}
                    </Card.Group>
                  </Grid.Row>
                  <Header>Best Matches For Them</Header>
                  <Grid.Row columns={3}>
                    <Card.Group itemsPerRow={3}>
                    {this.props.forThem?.map((person) => <MatchesCard allMatches={person} />)}
                    </Card.Group>
                  </Grid.Row>
                  <Header>Apprentice</Header>
                  <Grid.Row columns={3}>
                    <Card.Group itemsPerRow={3}>
                    {this.props.forMe?.map((person) => <MatchesCard allMatches={person} />)}
                    </Card.Group>
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
