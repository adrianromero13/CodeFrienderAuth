import React from 'react';
import { Grid } from 'semantic-ui-react';

import AllUsersHeader from './allUsersHeader';
import UserProfileHeader from './userProfileHeader';

export default () => {
  return (
    <Grid.Row textAlign='center' centered>
      <UserProfileHeader/>
      <AllUsersHeader/>
    </Grid.Row>
  )
};