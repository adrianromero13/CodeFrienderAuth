import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Image,
  Header,
  Icon,
  Label,
} from 'semantic-ui-react';

export default (props) => {
  return (
      <Menu secondary>
        <Menu.Item fitted='vertically'>
          <Header as="h3" inverted >
            <Icon name='code branch' />
            <Header.Content content='Code Friender' style={{ textShadow: '2px 2px 6px #000000' }} />
          </Header>
        </Menu.Item>
        <Menu.Item position='right' fitted='vertically'>
          <Menu.Item 
          position='right' 
          style={{ textShadow: '2px 2px 6px #000000' }}
            as={Link}
            to='/messages'
            name='messages'
          />
          <Menu.Item 
          position='right'
          style={{ textShadow: '2px 2px 6px #000000' }}
            as={Link}
            to='/profile'
            name='Profiles'
          />
          <Menu.Item position='right'>
            <Image>
              <Label circular color='green' empty />
            </Image>
          </Menu.Item>
        </Menu.Item>
      </Menu>
  )
};
