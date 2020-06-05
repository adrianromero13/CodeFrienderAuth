import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button, Menu, Label } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';

import axios from 'axios';
import { AUTH_USER } from '../../actions/types';

class SignIn extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signin', formValues);
      console.log(data);
      //set the token in a key valued pair inside of local storage 
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data })
      this.props.history.push('/profile'); //redirects user to counter page
    } catch (e) {
      //error catching different for signing in
      throw new SubmissionError({
        email: 'Please try again',
        password: 'You entered a bad password',
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
        style={{maxWidth: 'auto'}}
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
        style={{maxWidth: 'auto'}}
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
            // validate={
            //   [
            //     required({ msg: 'Email is required' }),
            //     email({ msg: 'You must provide a valid email address' })
            //   ]
            // }
          />
          <Field
            name='password'
            component={this.renderPassword}
            // validate={
            //   [
            //     required({ msg: 'You must provide a password' })
            //   ]
            // }
          />
          <Button
            content='Sign In'
            color='teal'
            size='tiny'
            type='submit'
            disabled={submitting}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default reduxForm({ form: 'signin' })(SignIn);
