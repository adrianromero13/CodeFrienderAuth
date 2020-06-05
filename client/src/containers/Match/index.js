import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from './../../hoc/requireAuth';

import { Grid, Header, Container } from 'semantic-ui-react';

import { getAllMatches } from './../../actions/users';
import { GET_MATCHES, GET_MATCHES_ERROR } from '../../actions/types';

import matchesCard from './matchesCard';

class Match extends Component {

    componentDidMount() {
        this.props.getAllMatches();
        console.log('LOOK HERE IDIOT', this.props)
        // try {
        //     const { data } = await axios.get('/api/users/matches', { headers: { 'authorization': localStorage.getItem('token') } });
        //     console.log('data', data);
        // } catch (e) {
        //     console.log(e)
        // }
    }


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
    return { allMatches: state.users.allMatches, allMatchesError: state.users.allMatchesError };
}

export default compose(
    connect(mapStateToProps, { getAllMatches }),
    requireAuth
)(Match);
