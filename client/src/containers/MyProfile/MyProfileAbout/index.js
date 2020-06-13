import React from 'react';
import {
  Divider,
  Image,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react';

export default (props) => {
  return (
    <Grid.Column width={6}>
      <Grid.Row>
        {/* this is where the badge will go */}
        <Image src='https://via.placeholder.com/200/200' />
      </Grid.Row>
      <Divider horizontal fitted><Icon name='cog' /></Divider>
      <Grid.Row>
        <Header content='Some Text' />
        <Header.Subheader content='What will go here? An how will we get it?' />
        <Header content='A second Section' />
        <Header.Subheader content='a secondary section with some more info....but what?' />
      </Grid.Row>
      <Divider horizontal fitted><Icon name='cogs' /></Divider>
      <Grid.Row>
        <Header as='h5' content='Skills' />
        <Header.Subheader content='maybe something the user can input themselves' />
      </Grid.Row>
    </Grid.Column>
  )
};
