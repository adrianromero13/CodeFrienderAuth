import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container } from 'semantic-ui-react';

import { getAllMatches } from './../../actions/users';
import { getUserData } from './../../actions/profile';
import { GET_MATCHES, GET_MATCHES_ERROR, GET_USER_DATA, GET_USER_DATA_ERROR } from '../../actions/types';

import matchesCard from './matchesCard';
import { fromAddress } from 'react-geocode';

class Match extends Component {

    async componentDidMount() {
        this.props.getAllMatches();
        this.props.getUserData();
        console.log('LOOK HERE IDIOT', this.props)
        // try {
        //     const { data } = await axios.get('/api/users/matches', { headers: { 'authorization': localStorage.getItem('token') } });
        //     console.log('data', data);
        // } catch (e) {
        //     console.log(e)
        // }
    }

    // componentWillMount() {
    //     this.props.getCurrentUserData();
    // }


    render() {
        // console.log('allmatches(data)', this.props.allMatches)
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
                                    <matchesCard allMatches={this.props.allMatches} />
                                </Grid.Row>
                                <Header>Best Matches For Them</Header>
                                <Grid.Row columns={3}>
                                    <p>Mentor</p>
                                    <matchesCard allMatches={this.props.allMatches} />
                                </Grid.Row>
                                <Header>Best Matches For Me</Header>
                                <Grid.Row columns={3}>
                                    <p>Apprentice</p>
                                    <matchesCard allMatches={this.props.allMatches} />
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
    return {
        allMatches: state.users.allMatches,
        allMatchesError: state.users.allMatchesError,
        currentUser: state.currentUser.getUserData,
        getCurrentUserError: state.currentUser.getServerError,
        getServerError: state.currentUser.getClientError,
    };
}

export default compose(
    connect(mapStateToProps, { getAllMatches, getUserData }),
    requireAuth
)(Match);
