import React from 'react';
import { Header, Icon, Card, Image } from 'semantic-ui-react';


export default (props) => {
  console.log('inside of cardrender', props);
  if (props.allUsers.length === 0) {
    return <Header content='No users yet, please wait for new Users'/>
  } else {
    return props.allUsers.map(({_id, badge, firstName, lastName, strength, weakness, bio, email}) => {
    return (
      <Card centered color={'red'} key={_id}>
        <Image src={badge} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{firstName} {lastName}</Card.Header>
          <Card.Meta>
            <span>Strength: {strength} </span>
            <br />
            <span>Weakness: {weakness} </span>
          </Card.Meta>
          <Card.Description>{bio}</Card.Description>
        </Card.Content>
        <Card.Content extra link>
          <Icon name='user secret' iconPosition='left' />
          {email}
        </Card.Content>
      </Card>
    )})
  };
};
