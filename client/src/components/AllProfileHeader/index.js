import React from 'react';
import { Header, Grid, Responsive, Icon } from 'semantic-ui-react';


export default () => {
  return (
    <Grid.Row>
      <Grid.Column width={4}>
        <Responsive minWidth={768}>
          <Header as='h3' icon textAlign='center'><Icon name='user circle' />User Profile</Header>
        </Responsive>
      </Grid.Column>
      <Grid.Column width={12}>
        <Header as='h3' icon textAlign='center'><Icon name='users circle' />Code Frienders</Header>
      </Grid.Column>
    </Grid.Row>
  )
};