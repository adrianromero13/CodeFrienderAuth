import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Segment, Icon } from 'semantic-ui-react'


export default class Banner extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted fluid>
        <Menu inverted pointing secondary size='large'>
          <Menu.Item>
          <Header as="h3" inverted >
            <Icon name='code branch' />
            <Header.Content>
              Code Friender
          <Header.Subheader>Mentor | Collaborate | Apprentice</Header.Subheader>
            </Header.Content>
          </Header>
          </Menu.Item>
            <Menu.Item
              as={Link}
              to='/signUp'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/match'
              name='match'
              active={activeItem === 'match'}
              onClick={this.handleItemClick}
            />          
            <Menu.Item
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