import React from 'react';
import {Grid, Responsive, Header, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <Grid.Column width={4}>
      <Responsive minWidth={768}>
        <Header as='h3' icon textAlign='center'><Icon name='user circle' />User Profile</Header>
      </Responsive>
    </Grid.Column>
  )
}
