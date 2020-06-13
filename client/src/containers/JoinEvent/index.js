import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import {
  Form,
  Segment,
  Button,
  Header,
  Icon,
  Container,
  Divider,
} from "semantic-ui-react";
import { required } from "redux-form-validators";
import axios from "axios";

import requireAuth from "./../../hoc/requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import { ADD_USER_EVENT } from "../../actions/types";
import { getUserEvents, selectEvent } from "../../actions/event";

class JoinEvent extends Component {
    onSubmit = async (formValues, dispatch) => {
      try {
        const { data } = await axios.post("/api/events/join", formValues, {
          headers: { authorization: localStorage.getItem("token") },
        });
        localStorage.setItem("currentPin", formValues.pin);
        dispatch({ type: ADD_USER_EVENT });
        this.props.selectEvent(data._id);
        this.props.history.push("/eventspage");
      } catch (e) {
        throw new SubmissionError({
          password: "Wrong code",
          _error: "No event to join!",
        });
      }
    };

    renderEmail = ({ input, meta }) => {
      return (
        <Form.Input
          {...input}
          fluid
          error={meta.touched && meta.error}
          icon="user"
          iconPosition="left"
          autoComplete="off"
          placeholder="User Name"
        />
      );
    };
    renderPassword = ({ input, meta }) => {
      return (
        <Form.Input
          {...input}
          fluid
          error={meta.touched && meta.error}
          icon="lock"
          iconPosition="left"
          autoComplete="off"
          placeholder="invite code"
        />
      );
    };
    render() {
      const { handleSubmit, invalid, submitting, submitFailed } = this.props;
      return (
        <div>
          <Container>
            <Header as="h2" icon textAlign="center">
              <Icon
                name="calendar check outline"
                circular
                size="massive"
                className="sign-in-icon"
              />
              <Divider horizontal> Join an Event </Divider>
            </Header>
  
            <Form size="large" onSubmit={handleSubmit(this.onSubmit)}>
              <Segment stacked>
                <Field
                  name="pin"
                  component={this.renderPassword}
                  validate={[required({ msg: "You must provide a code" })]}
                />
                <Button
                  content="Join Event"
                  color="teal"
                  size="large"
                  type="submit"
                  disabled={invalid || submitting || submitFailed}
                />
              </Segment>
            </Form>
          </Container>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      userEvents: state.event.userEvents,
    };
  }
  const composedComponent = compose(
    reduxForm({ form: "JoinEvent" }),
    connect(mapStateToProps, { getUserEvents, selectEvent })
  )(JoinEvent);
  
  export default requireAuth(composedComponent);