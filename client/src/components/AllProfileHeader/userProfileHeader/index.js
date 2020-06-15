import React from 'react';
import { Grid, Responsive, Header, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <Responsive minWidth={768}>
      <Grid.Column width={4}>
        <Header as='h4' icon textAlign='center'><Icon name='user circle' /></Header>
      </Grid.Column>
    </Responsive>
  )
}
