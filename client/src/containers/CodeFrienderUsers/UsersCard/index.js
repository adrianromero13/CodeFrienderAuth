import React from 'react'
import { Button, Card, Image, Icon, Header } from 'semantic-ui-react';

export default (props) => {
  if (props.users.length === 0) {
    return <Header content='No users yet, please wait for new Users' />
  } else {
    return props.users.map(({ _id, badge, firstName, lastName, strength, weakness, bio, email }) => {
      return (
        <Card key={_id} color='teal' className='customCard' style={{marginRight: '10px'}}>
          <Card.Content>
            <Image
              src={badge}
              size='tiny'
              floated='left'
            />
            <Card.Header textAlign='center'>{firstName} {lastName}</Card.Header>
            <Card.Meta>CodeFriender since: <span>date</span></Card.Meta>
          </Card.Content>
          <Card.Content description={bio} />
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
          <Card.Content extra link>
            <Icon name='user secret' iconPosition='left' />
            {email}
          </Card.Content>
        </Card>
      )
    })
  }
};
