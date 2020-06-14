
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Header,
  Icon,
  Label,
  Grid,
  Divider,
  Container
} from 'semantic-ui-react';



class MyProfileUI extends Component {
  state = { activeItem: 'friends' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  // renderSection Function (to handle swtich case)

  renderFriends() {

    return (
      <>
      <Header.Subheader content='Following'/>
      </>
    )
  }

  renderContributions() {
    return (
      <>
      <Header.Subheader content='Repositories'/>
      </>
    )
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid.Column width={10} textAlign='left' stretched className='customHeight'>
        <Grid.Row>
          <Divider hidden />
          <Grid columns={3}>
            <Header as='h2' content='First Last' />
            {/* <Icon name='map marker' iconPosition='left'/> */}
            {/* <Header.Subheader content='City, State'/> */}
            <Label className='customLabel'>
              <Icon name='map marker' />
                city, state
             </Label>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Header.Subheader className='customText' content='Job Title' />
        </Grid.Row>
        <Menu.Item className='customPadding' style={{ textShadow: '2px 2px 6px #000000' }}
          as={Link}
          to='/match'
          name='Your Matches'
        />
        <Grid.Row>
          <Menu className='customLabel' secondary pointing>
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='contributions'
              active={activeItem === 'contributions'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Row>
        <Grid.Row>
          <Container>
            {/* {this.state.activeItem === 'friends'? <FriendsSection/> : <ContributionsSection/>}
            if more activeItems use switch case to return corrisponding component */}
          </Container>
          <Container>
            {this.state.activeItem === 'friends' ? this.renderFriends() : this.renderContributions()}
          </Container>
        </Grid.Row>

      </Grid.Column>
    )
  }
};

export default MyProfileUI;
