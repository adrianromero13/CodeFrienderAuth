import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container } from 'semantic-ui-react';

import { getAllMatches } from './../../actions/users';
import { GET_MATCHES, GET_MATCHES_ERROR } from '../../actions/types';

// { headers: { 'authorization': localStorage.getItem('token') } }


class Match extends Component {

    componentDidMount() {
        this.props.getAllMatches();
        // try {
        //     const { data } = await axios.get('/api/users/matches', { headers: { 'authorization': localStorage.getItem('token') } });
        //     console.log('data', data);
        // } catch (e) {
        //     console.log(e)
        // }
    }


    render() {
        return (
            <Container>
                <Grid columns={2}>
                    {/* <AllProfileHeader /> */}
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <p>something</p>
                            {/* <UserProfile color={'olive'} user={this.state.users} /> */}
                        </Grid.Column>
                        <Grid.Column width={12} textAlign='center'>
                            <Grid centered>
                                <Header>Best Matches</Header>
                                <Grid.Row columns={3}>
                                    <p>something else</p>
                                    {/* map bestMatches from state */}
                                    {/* {this.state.best.length && this.state.best.map((user, idx) => <UserProfile color={'red'} user={user} key={idx} />)} */}
                                </Grid.Row>
                                <Header>Best Matches For Them</Header>
                                <Grid.Row columns={3}>
                                    <p>Mentor</p>
                                    {/* map mtchesForThem from state */}
                                    {/* {this.state.matchesForThem.length && this.state.matchesForThem.map((user, idx) => <UserProfile color={'purple'} user={user} key={idx} />)} */}
                                </Grid.Row>
                                <Header>Best Matches For Me</Header>
                                <Grid.Row columns={3}>
                                    <p>Apprentice</p>
                                    {/* map mtchesForMe from state */}
                                    {/* {this.state.matchesForMe.length && this.state.matchesForMe.map((user, idx) => <UserProfile color={'teal'} user={user} key={idx} />)} */}
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return { allMatches: state.users.allMatches, allMatchesError: state.users.allMatchesError };
  }

export default compose(
    connect(mapStateToProps, { getAllMatches }),
    requireAuth
  )(Match);
