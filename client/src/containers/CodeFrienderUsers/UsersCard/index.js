import React from 'react'
import { Button, Card, Image, Icon, Header, Menu } from 'semantic-ui-react';

import moment from 'moment';

import './../scrollableContainer.css';

export default (props) => {
  if (props.users.length === 0) {
    return <Header content='No users yet, please wait for new Users' />
  } else {
    return props.users.map(({ _id, badge, firstName, lastName, strength, weakness, bio, email, dateCreated }) => {
      return (
        <Card key={_id} color='red' className='customCard' >
          <Card.Content>
            <Image
              src={badge}
              size='tiny'
              floated='left'
            />
            <Card.Header textAlign='center'>{firstName} {lastName}</Card.Header>
            <Card.Meta>CodeFriender since:</Card.Meta>
            <Card.Meta><span>{moment(dateCreated).fromNow()}</span></Card.Meta>
          </Card.Content>
          <Card.Content className='customText' description={bio} />
          <Card.Content extra>
            <Button
              fluid
              color='black'
              attached='right'>
              <Icon name='certificate' iconPosition='left' />
              <span>Strength: {strength} </span>
            </Button>
            <Button
              fluid
              color='grey'
              attached='right'
            >
              <Icon name='cog' iconPosition='left' />
              <span>Weakness: {weakness} </span>
            </Button>
          </Card.Content>
          <Menu.Item as='a'>
            <Icon name='mail square' iconPosition='left' />
            {email}
          </Menu.Item>
        </Card>
      )
    })
  }
};
