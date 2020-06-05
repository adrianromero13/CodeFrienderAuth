import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Grid, Container, Responsive, Card } from 'semantic-ui-react';

// import axios from 'axios';

import requireAuth from '../../hoc/requireAuth';
import { getAllUsers } from '../../actions/users';

import { GET_USERS, GET_USERS_ERROR } from '../../actions/types';

import AllProfileHeader from '../../components/AllProfileHeader';
import CodeFriendersCard from './CodeFriendersCard';
import UsersCard from './UsersCard';

class AllCodeFrienders extends Component {

  // state = {
  //   activePage: 1,
  //   start: 0,
  //   end: 10
  // }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    console.log('onsignin',this.props.allUsers.length);
        return (
          <>
            <Container>
              <Grid columns={2}>
                <AllProfileHeader/>
              </Grid>
              <Grid.Row>
                <Grid columns={2}>

                  <Grid.Column width={4}>
                    <Responsive minWidth={768}>
                      
                      {/* <UsersCard/> */}

                    </Responsive>
                  </Grid.Column>

                  <Grid.Column width={12}>
                    {/* create responsive for smaller screens */}
                    <Responsive>
                      <Card.Group fluid itemsPerRow={3}>
                        <CodeFriendersCard allUsers={this.props.allUsers}/>
                      </Card.Group>
                    </Responsive>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Container>
          </>
          //           {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
          //             <CodeFriendersCard codeFrienderUsers={CodeFrienderUsers} />
          //             )
          //             )}
        )
    }
  };


function mapStateToProps(state) {
  return { allUsers: state.users.allUsers, getUsersError: state.users.getUsersError };
}

// export default connect(mapStateToProps, { getAllUsers })(AllCodeFrienders);

export default compose(
  connect(mapStateToProps, { getAllUsers }),
  requireAuth
)(AllCodeFrienders);
// function mapStateToProps({ users: allUsers, getUsersError }) {
//   return {
//     users: allUsers,
//     error: getUsersError,
//   };
// }

// export default compose(
//   //   reduxForm({ form: 'addTodo' }),
//   // requireAuth,
//   connect(mapStateToProps, { getAllUsers })
// )(AllCodeFrienders);
