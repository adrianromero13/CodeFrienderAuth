import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Segment, Icon } from 'semantic-ui-react'


export default class Banner extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment style={{backgroundColor: '#5769a0'}}inverted fluid>
        <Menu inverted pointing secondary size='large'>
          <Menu.Item>
          <Header as="h3" inverted >
            <Icon name='code branch' />
            <Header.Content>
            <span className='shadow' style={{textShadow: '2px 2px 6px #000000'}}>Code Friender</span>
          <Header.Subheader><span className='shadow' style={{textShadow: '2px 2px 6px #000000'}}>Mentor | Collaborate | Apprentice</span></Header.Subheader>
            </Header.Content>
          </Header>
          </Menu.Item>
            <Menu.Item className='shadow' style={{textShadow: '2px 2px 6px #000000'}}
              as={Link}
              to='/signUp'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item className='shadow' style={{textShadow: '2px 2px 6px #000000'}}
              as={Link}
              to='/match'
              name='match'
              active={activeItem === 'match'}
              onClick={this.handleItemClick}
            />          
            <Menu.Item className='shadow' style={{textShadow: '2px 2px 6px #000000'}}
              as={Link}
              to='/profile'
              name='allProfiles'
              active={activeItem === 'allProfiles'}
              onClick={this.handleItemClick}
            />
        </Menu>
      </Segment>
    )
  }
}