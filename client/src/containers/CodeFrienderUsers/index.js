import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Container, Responsive, Segment, Card } from 'semantic-ui-react';

import { compose } from 'redux';
import axios from 'axios';

import requireAuth from '../../hoc/requireAuth';
import { getAllUsers } from '../../actions/Users';

import { GET_USERS, GET_USERS_ERROR } from '../../actions/types';
import CodeFriendersCard from './CodeFriendersCard';
import AllProfileHeader from './AllProfileHeader';

class AllCodeFrienders extends Component {

  state = {
    activePage: 1,
    start: 0,
    end: 10
  }

  //   onSubmit = async (formValues, dispatch) => {
  //     try {
  //       await axios.post('/api/user/todos', formValues, { headers: { 'authorization': localStorage.getItem('token')}} );
  //       dispatch({ type: ADD_TODO });
  //       this.props.getUserTodos();
  //     } catch (e) {
  //       dispatch({ type: ADD_TODO_ERROR, payload: e });
  //     }
  //   }

  // componentDidMount() {
  //     this.props.getUsers();
  // }

  //   renderAddTodo = ({ input, meta }) => {
  //     return (
  //       <>
  //         <Form.Input
  //           {...input}
  //           error={ meta.touched && meta.error }
  //           fluid
  //           autoComplete='off'
  //           placeholder='Add a todo'
  //         />
  //       </>
  //     )
  //   }

  //   handlePageChange = (event, data) => {
  //     this.setState({
  //       activePage: data.activePage,
  //       start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
  //       end: data.activePage * 10
  //     });
  //   }

  render() {
    return (
      <>
        <Container>
          <Grid columns={2}>
            <AllProfileHeader/>
          </Grid>
          {/* ---------------------HEEEEEERRREEEEEEE---------------- */}
        </Container>
      </>

      // <Container>
      //   <Grid columns={2}>
      //     <AllProfileHeader />

      //   </Grid>
      //   <Grid.Row>
      //     <Grid columns={2}>

      //       <Grid.Column width={4}>
      //         <Responsive minWidth={768}>
      //           {this.state.currentUser.length && <CurrentUserCard currentUser={this.state.currentUser[0]} />}
      //         </Responsive>
      //       </Grid.Column>

      //       <Grid.Column width={12}>  



      //         <Responsive
      //         fireOnMount
      //         onUpdate={this.handleOnUpdate}
      //         >

      //         <Card.Group fluid  itemsPerRow={itemsPerRow}>

      //           {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
      //             <CodeFriendersCard codeFrienderUsers={CodeFrienderUsers} />
      //             )
      //             )}
      //         </Card.Group>
      //             </Responsive>
      //       </Grid.Column>
      //       </Grid>
      //   </Grid.Row>
      // </Container>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos.userTodos,
//     clientError: state.todos.getUserTodosClientError,
//     serverError: state.todos.getUserTodosServerError
//   };
// }

function mapStateToProps({ users: getUsers }) {
  return {
    users: getUsers,
  };
}

// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);


// 1 way
// export default reduxForm({ form: 'addTodo' })(connect(mapStateToProps, { getUserTodos })(UserTodoList));

// 2nd way
// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);
// export default reduxForm({ form: 'addTodo'})(composedComponent);

export default compose(
  //   reduxForm({ form: 'addTodo' }),
  // requireAuth,
  connect(mapStateToProps, { getAllUsers })
)(AllCodeFrienders);
