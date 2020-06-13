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

import './style.css';

class MyProfile extends Component {
  state = { activeItem: 'friends' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // async componentDidMount() {

  // }
  render() {
    const { activeItem } = this.state;
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

              <Grid.Column width={10} textAlign='left' stretched className='customHeight'>

                <Grid.Row>
                  <Divider hidden />
                  <Grid columns={3}>
                    <Header as='h2' content='First Last' />
                    {/* <Icon name='map marker' iconPosition='left'/> */}
                    {/* <Header.Subheader content='City, State'/> */}
                    <Label className='customLabel'>
                      <Icon name='map marker' />
                    city, state
                  </Label>
                  </Grid>
                </Grid.Row>
                <Grid.Row>
                  <Header.Subheader className='customText' content='Job Title' />
                </Grid.Row>
                <Menu.Item className='customPadding' style={{ textShadow: '2px 2px 6px #000000' }}
                  as={Link}
                  to='/match'
                  name='Your Matches'
                />
                <Grid.Row>
                    <Menu className='customLabel' secondary pointing>
                      <Menu.Item
                      name='friends'
                      active={activeItem === 'friends'}
                      onClick={this.handleItemClick}
                      />     
                      <Menu.Item
                      name='contributions'
                      active={activeItem === 'contributions'}
                      onClick={this.handleItemClick}
                      />              
                    </Menu>
                </Grid.Row>
                <Grid.Row>
                  <Container>
                    the friends section
                  </Container>
                  <Container>
                    the contributions section
                  </Container>
                </Grid.Row>

              </Grid.Column>

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
