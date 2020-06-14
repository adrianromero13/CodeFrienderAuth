import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { Menu, Header, Container, Icon, Responsive } from 'semantic-ui-react'


import './shadows.css';

class Banner extends Component {
  state = { 
    activeItem: ''
  }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return (
      // <Segment style={{backgroundColor: '#5769a0'}} inverted fluid>
      // <Container>
        <Menu 
        stackable
          className='bannerBackground'
          fluid
          inverted 
          pointing 
          secondary 
          size='large'
          >
          <Menu.Item as={Link} to='/'>
          <Header as="h3" inverted >
            <Icon name='code branch' />
            <Header.Content>
            <span className='customShadows'>Code Friender</span>
          <Header.Subheader><span className='customShadows'>Mentor | Collaborate | Apprentice</span></Header.Subheader>
            </Header.Content>
          </Header>
          </Menu.Item>
            {/* <Menu.Item 
              className='customShadows'
              as={Link}
              to='/'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            /> */}
            <Menu.Item className='customShadows'
              as={Link}
              to='/match'
              name='match'
              active={activeItem === 'match'}
              onClick={this.handleItemClick}
            />          
            <Menu.Item className='customShadows'
              as={Link}
              to='/profile'
              name='allProfiles'
              active={activeItem === 'allProfiles'}
              onClick={this.handleItemClick}
            />
            <Menu.Item className='customShadows'
              as={Link}
              to='/createevent'
              name='createEvent'
              active={activeItem === 'createEvent'}
              onClick={this.handleItemClick}
            />
            <Menu.Item className='customShadows'
              as={Link}
              to='/joinevent'
              name='joinEvent'
              active={activeItem === 'joinEvent'}
              onClick={this.handleItemClick}
            />
            <Menu.Item className='customShadows'
              position='right'
              as={Link}
              to='/signout'
              name='signout'
              />
        </Menu>
        // </Container>

      // </Segment>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Banner);
