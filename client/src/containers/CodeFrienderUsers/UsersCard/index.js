import React from 'react';
import { Card, Icon, Responsive, Grid, Image } from 'semantic-ui-react';

export default (props) => {
  return props.user.map(({ _id, badge, firstName, lastName, strength, weakness, bio, email }) => {
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
};