import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container, Card } from 'semantic-ui-react';

import Flexbox from 'flexbox-react';



import { getAllMatches } from './../../actions/users';
import { getUserData } from './../../actions/profile';
import { GET_MATCHES, GET_MATCHES_ERROR, GET_USER_DATA, GET_USER_DATA_ERROR } from '../../actions/types';

import UserProfile from './../../components/UserProfile';
import UsersCard from './../CodeFrienderUsers/UsersCard';

// import { fromAddress } from 'react-geocode';

import './style.css';
import AllProfileHeader from '../../components/AllProfileHeader';

class Match extends Component {

  async componentDidMount() {
    await this.props.getAllMatches();
    await this.props.getUserData();
  }


  render() {
    return (
      <Container>
        <Grid columns={2}>
          <AllProfileHeader />
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <UserProfile currentUser={this.props.currentUser} />
            </Grid.Column>
            <Grid.Column width={13} textAlign='center'>
              <Grid centered>
                <Header>Collaborate</Header>
                <Grid.Row columns={3}>
                  <Flexbox element="header" height='auto' className='scrolling-wrapper-flexbox'>
                    {/* {this.props.best?.map((person) => <MatchesCard allMatches={person} />)} */}
                    {/* {this.props.best?.map((person) => <UsersCard users={person} />)} */}
                    <UsersCard users={this.props.best}/>
                  </Flexbox>
                </Grid.Row>
                <Header>Mentor</Header>
                <Grid.Row columns={3}>
                  <Flexbox element='card' height='auto' className='scrolling-wrapper-flexbox'>
                    {/* {this.props.forThem?.map((person) => <MatchesCard allMatches={person} />)} */}
                    <UsersCard users={this.props.forThem}/>
                  </Flexbox>
                </Grid.Row>
                <Header>Apprentice</Header>
                <Grid.Row columns={3}>
                  <Flexbox element='card' height='auto' className='scrolling-wrapper-flexbox'>
                    {/* {this.props.forMe?.map((person) => <MatchesCard allMatches={person} />)} */}
                    <UsersCard users={this.props.forMe}/>
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
