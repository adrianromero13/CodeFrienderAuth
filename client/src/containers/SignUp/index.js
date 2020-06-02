import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; // Higher order component HOA
import { Form, Segment, Button, Container } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators'; //validators  

import { connect } from 'react-redux';
import { compose } from 'redux';

import axios from 'axios';

import { AUTH_USER, AUTH_USER_ERROR, STRENGTH, WEAKNESS } from '../../actions/types';
import { strength, weakness } from '../../actions/skills';
import { STATES } from 'mongoose';


class SignUp extends Component { //Must define statelss funciton outside of the render()

   skills = [
    { text: 'HTML-GIT-CSS', value: 'HTML-GIT-CSS' },
    { text: 'CSS-Bootstrap', value: 'CSS-Bootstrap' },
    { text: 'JavaScript', value: 'JavaScript' },
    { text: 'Web-APIs', value: 'Web-APIs' },
    { text: 'Third-Party-APIs', value: 'Third-Party-APIs' },
    { text: 'Server-Side-APIs', value: 'Server-Side-APIs' },
    { text: 'NodeJS', value: 'NodeJS' },
    { text: 'Object-Oriented-Programming', value: 'Object-Oriented-Programming' },
    { text: 'Express', value: 'Express' },
    { text: 'MySQL', value: 'MySQL' },
    { text: 'MVC', value: 'MVC' },
    { text: 'React', value: 'React' },
    { text: 'State', value: 'State' },
  ]
//set const for dropdown
  onSubmit = async (formValues, dispatch) => {
    try {
      //formvalues looks like this { email: 'someEmail@.com, password: '123456' }
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/UserCard');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        //spread out form props
        {...input}
        label='Email Adress'
        error={meta.touched && meta.error} //error prop {boolean}
        fluid
        icon='user'
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
        label='Password'
        error={meta.touched && meta.error}
        fluid
        type='password'
        icon='lock'
        placeholder='password'
        autoComplete='off'
        iconPosition='left'
      />
    )
  }
  renderGitHub = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        label='github Username'
        type='username'
        icon='github'
        placeholder='github username'
        autoComplete='off'
        iconPosition='left'
      />
    )
  }
  // renderFirst = ({ input, meta }) => {
  //   return (
  //     <Form.Input
  //       {...input}
  //       label='First Name'
  //       error={meta.touched && meta.error}
  //       type='name'
  //       placeholder='First Name'
  //       autoComplete='off'
  //     />
  //   )
  // }
  // renderLast = ({ input, meta }) => {
  //   return (
  //     <Form.Input
  //       {...input}
  //       label='Last Name'
  //       error={meta.touched && meta.error}
  //       type='name'
  //       placeholder='Last Name'
  //       autoComplete='off'
  //     />
  //   )
  // }
  renderInput = ({ input, meta, label }) => {
    return (
      <Form.Input
        {...input}
        label={label}
        error={meta.touched && meta.error}
        type='name'
        placeholder={label}
        autoComplete='off'
      />
    )
  }
  renderStrength = ({ select, meta }) => {
    return (
      <Form.Select
        {...select}
        label='Strength'
        error={meta.touced && meta.error}
        type='option'
        placeholder='Strength'
        autoComplete='off'
        options={this.skills}
      />
    )
  }
  renderWeakness = ({ select, meta }) => {
    return (
      <Form.Select
        {...select}
        label='Weakness'
        error={meta.touced && meta.error}
        type='option'
        placeholder='Weakness'
        autoComplete='off'
        options={this.skills}
      />
    )
  }

  //build the form
  render() {
    console.log('inside of signup render', this.props);
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Container textAlign='justified'>

        <Form size='large' onSubmit={handleSubmit(this.onSubmit)} >
          <Segment stacked>
            <Field
              name='firstName'
              label='First Name'
              component={this.renderInput}
            />
            <Field
              name='lastName'
              label='Last Name'
              component={this.renderInput}
            />
            <Field
              name='email'
              component={this.renderEmail} //this needs to be defined outside of render^
              validate={
                //you can pass an array of validations
                [
                  required({ msg: 'Email is required' }), //add settings ie. msg
                  email({ msg: 'You must provide a valid email address' })  //is this email?
                ]
              }
            />
            {/* new field */}
            <Field
              name='password'
              component={this.renderPassword}
              validate={
                [
                  required({ msg: 'You must provide a password' }),
                  //make password be minimum length of 6 using validator
                  length({ min: 6, msg: 'Your password must be at least 6 characters long' })
                ]
              }
            />
            <Field
              name='github'
              component={this.renderGitHub}
              validate={
                [
                  required({ msg: 'You must provide a github username' }),
                ]
              }
            />
            <Field
              name='strength'
              component={this.renderStrength}
              validate={
                [
                  required({ msg: 'You must select a Strength' }),
                ]
              }
            />
            <Field 
              name='weakness'
              component={this.renderWeakness}
              validate={
                [
                  required({ msg: 'You must select a Weakness' }),
                ]
              }
            />
            <Button
              content='Sign up'
              color='teal'
              fluid
              size='large'
              type='submit'
              disabled={invalid || submitting || submitFailed}

            />
          </Segment>
        </Form>
      </Container>
    );
  }
}

const asyncValidate = async formValues => {

  // add asyncValidation for github username
  
  try {
    const { data } = await axios.get(`/api/user/emails?email=${formValues.email}`);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: 'Email already exists, please sign up with a different email' };
  }
}

export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: ['email'] })(SignUp);
