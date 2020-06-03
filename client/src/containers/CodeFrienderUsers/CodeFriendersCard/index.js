import React from 'react';
import { Header, Icon, Card, Image } from 'semantic-ui-react';


export default (props) => {
    return (
      <Card centered color={'red'} key={props.allUsers._id}>
        <Image src={props.allUsers.badge} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.allUsers.firstName} {props.allUsers.lastName}</Card.Header>
          <Card.Meta>
            <span>Strength: {props.allUsers.strength} </span>
            <br />
            <span>Weakness: {props.allUsers.weakness} </span>
          </Card.Meta>
          <Card.Description>{props.allUsers.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra link>
          <Icon name='user secret' iconPosition='left' />
          {props.allUsers.email}
        </Card.Content>
      </Card>
    );
};
