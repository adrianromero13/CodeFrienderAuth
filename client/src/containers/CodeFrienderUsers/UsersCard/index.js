import React from 'react';
import { Card, Icon, Header, Grid, Image } from 'semantic-ui-react';

export default (props) => {
  console.log('userscard', props);
  if (props.currentUser?.length === 0) {
    return <Header content='No users yet, please wait for new Users' />
  } else {
    return props.currentUser.map(({ _id, badge, firstName, lastName, strength, weakness, bio, email }) => {
      return (
        <Grid.Column width={5}>
          <Card color={'teal'} key={_id}>
            <Image src={badge} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{firstName} {lastName}</Card.Header>
              <Card.Meta>
                <span>Strength:{strength} </span>
                <br></br>
                <span>Weakness:{weakness} </span>
              </Card.Meta>
              <Card.Description>
                {bio}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              {email}
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    });
  }
};