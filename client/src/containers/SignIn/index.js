import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { email, required } from 'redux-form-validators';
import { Form, Button } from 'semantic-ui-react';
import  { withRouter } from 'react-router-dom';

import axios from 'axios';
import { AUTH_USER } from '../../actions/types';

class SignIn extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signin', formValues);
    
      //set the token in a key valued pair inside of local storage 
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data });
      // //failing to take in this.props
      this.props.history.push('/profile');
    } catch (e) {
      //error catching different for signing in
      throw new SubmissionError({
        email: 'email incorrect',
        password: 'password incorrect',
        _error: 'Login Failed'
      });
    }
  }

  renderEmail = ({ input, meta, label }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        icon='user'
        style={{ width: 'auto' }}
        label={label}
        iconPosition='left'
        autoComplete='off'
        placeholder='Email Address'
      />
    );
  }
  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        type='password'
        icon='lock'
        style={{ width: 'auto' }}
        placeholder='password'
        autoComplete='off'
        iconPosition='left'
      />
    );
  }
  render() {
    const { invalid, submitting, submitFailed, handleSubmit } = this.props;
    return (
      <Form size='small' onSubmit={handleSubmit(this.onSubmit)}>
        <Form.Group inline>
          <Field
            name='email'
            component={this.renderEmail}
            validate={
              [
                required({ msg: 'Email is required' }),
                email({ msg: 'You must provide a valid email address' })
              ]
            }
          />
          <Field
            name='password'
            component={this.renderPassword}
            validate={
              [
                required({ msg: 'You must provide a password' })
              ]
            }
          />
          <Button
            content='Sign In'
            color='teal'
            size='tiny'
            type='submit'
            disabled={invalid || submitting || submitFailed}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default withRouter(reduxForm({
  form: 'signin',
})(SignIn));
