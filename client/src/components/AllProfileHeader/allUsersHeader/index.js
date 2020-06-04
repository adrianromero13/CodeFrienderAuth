import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';


export default () => {
  return (
    <Grid.Column width={12}>
      <Header as='h3' icon textAlign='center'><Icon name='users circle' />Code Frienders</Header>
    </Grid.Column>
  )
}
