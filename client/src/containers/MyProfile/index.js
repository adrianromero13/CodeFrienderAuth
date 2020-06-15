import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';

import {
  Grid,
  Header,
  Container,
  Segment,
  Button,
  Icon,
  Image,
  Menu,
  Label,
  Divider,
}
  from 'semantic-ui-react';

// import requireAuth from './../../hoc/requireAuth';
import './../../containers/HomePage/style.css';

import MyProfileHeader from './MyProfileHeader';
import MyProfileAbout from './MyProfileAbout';
import MyProfileUI from './MyProfileUI';

import './style.css';

class MyProfile extends Component {

  // async componentDidMount() {

  // }
  
  render() {
    return (
      <div>
        <Container>
          <Container>
            <MyProfileHeader />
            <Divider horizontal fitted><Icon name='address card' /></Divider>
          </Container>
          <Container>
            <Grid padded>
              <MyProfileAbout />
              <MyProfileUI />
            </Grid>
          </Container>
        </Container>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//     return {
// // add state here
//     };
// }

// export default compose(
//     connect(mapStateToProps, { insert, actions, here }),
//     requireAuth
// )(MyProfile);


export default MyProfile;
