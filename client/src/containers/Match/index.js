import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container, Card } from 'semantic-ui-react';

import Carousel from 'semantic-ui-carousel-react';



import { getAllMatches } from './../../actions/users';
import { getUserData } from './../../actions/profile';
// import { GET_MATCHES, GET_MATCHES_ERROR, GET_USER_DATA, GET_USER_DATA_ERROR } from '../../actions/types';

import UserProfile from './../../components/UserProfile';
import MatchesCard from './MatchesCard';
// import { fromAddress } from 'react-geocode';

import './style.css';
import AllProfileHeader from '../../components/AllProfileHeader';

class Match extends Component {

  state = {
    best: [],
    forThem: [],
    forMe: []
  }

  async componentDidMount() {
    await this.props.getAllMatches();
    await this.props.getUserData();
    this.renderCarouselData();
  }

  renderCarouselData = () => {
    let best = [];
    this.props.best.forEach(person => {
      let obj = { render: () => <MatchesCard allMatches={person} /> };
      best.push(obj);
    })
    let forThem = [];
    this.props.forThem.forEach(person => {
      let obj = {
        render: () => <MatchesCard allMatches={person} /> };
      forThem.push(obj);
    })
    let forMe = [];
    this.props.forMe.forEach(person => {
      let obj = { render: () => <MatchesCard allMatches={person} /> };
      forMe.push(obj);
    })
    this.setState({ best, forThem, forMe });
  }

  render() {
    return (
      <Container>
        <Grid columns={2}>
          <AllProfileHeader/>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <UserProfile currentUser={this.props.currentUser} />
            </Grid.Column>
            <Grid.Column width={12} textAlign='center'>
              <Grid centered>
                <Header>Collaborate</Header>
                <Grid.Row columns={3}>
                  <Carousel
                    elements={this.state.best}
                    animation='slide left'
                    showNextPrev={true}
                    showIndicators={true}
                  />
                </Grid.Row>
                <Header>Mentor</Header>
                <Grid.Row columns={3}>
                  <Carousel
                    elements={this.state.forThem}
                    animation='slide left'
                    showNextPrev={true}
                    showIndicators={true}
                  />
                </Grid.Row>
                <Header>Apprentice</Header>
                <Grid.Row columns={3}>
                  <Carousel
                    elements={this.state.forMe}
                    animation='slide left'
                    showNextPrev={true}
                    showIndicators={true}
                  />
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
