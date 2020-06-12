import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import './style.css';
// import imageBG from './assets/images/devcollab.png';


import SignIn from './../SignIn';
// import { connect } from 'mongoose';
import BgImage from './assets/images/devcollab.png';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container styles={{ backgroundImage: `url(${BgImage})` }} text>
    <Header
      className='shadow'
      as='h1'
      inverted
      style={{
        fontSize: mobile ? '2em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2em',
      }}
    >
      <Icon name='code branch' />
      <span className='shadow' style={{ textShadow: '2px 2px 6px #000000' }}>Code Friender</span>
    </Header>
    <Header
      as='h2'
      content='Mentor | Collaborate | Apprentice'
      inverted
      style={{
        textShadow: '2px 2px 6px #000000',
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginBottom: '1.7em',
        marginTop: mobile ? '0.5em' : '1.2em',
      }}
    />
    
    <Button as={Link} to='/signup' active primary size='huge'style={{ textShadow: '2px 2px 6px #000000' }}>
      Let's Get Started
      <Icon name='right arrow' />
    </Button>
    
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}
      // id="landingImage"
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            className='landingImage'
            style={{ minHeight: '100vh', padding: '1em 0em' }}
          // vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as={Link} to='' active>
                  <span className='shadow' style={{ textShadow: '2px 2px 6px #000000' }}>Home</span>
                </Menu.Item>
                <Menu.Item as={Link} to='/match'><span className='shadow' style={{ textShadow: '2px 2px 6px #000000' }}>Match</span></Menu.Item>
                <Menu.Item as={Link} to='/profile'><span className='shadow' style={{ textShadow: '2px 2px 6px #000000' }}>Profile</span></Menu.Item>
                <Menu.Item as={Link} to='/dashboard'><span className='shadow' style={{ textShadow: '2px 2px 6px #000000' }}>Dashboard</span></Menu.Item>
                <Menu.Item position='right'>
                  <SignIn/>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to='/homepage' active>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to='/match'>Match</Menu.Item>
          <Menu.Item as={Link} to='/profile'>Profiles</Menu.Item>
          {/* change this if not using */}
          <Menu.Item as={Link} to='/dashboard'>DashBoard?</Menu.Item>
          <Menu.Item stackable>
          <SignIn/>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <SignIn/>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

// change to match the CodeFriender's mission statement
//show off the features of the CodeFriender's application as much as possible
const HomepageLayout = () => (
  <ResponsiveContainer
    className="landingImage">
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              A friend(er) in need
              ...is a friend indeed
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              As students of the coding arts, we are fully aware of the need to find a team of like-minded students to fill the gap between classroom and home learning. Now you can find the perfect study buddy to help you crack the code.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Simple as 1, 2, 3 .....
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              1. Enter you github username and password
              <br>

              </br>
              2. List your strength and weakness in the coding field
              <br>

              </br>
              3. Find the perfect Code Friend
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/assets/images/back-end.jpg'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I felt like I was fighting a war against React"
            </Header>
            <p style={{ fontSize: '1.33em' }}>..until I realized there was an army on my side. Code warriors!!</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Some of the people I've met on Code Friender have become my fellow employees"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='' />
              <b></b> Shlomo Pleban- Chief Engineer/MicroSoft
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          When you hit a wall...know who to call
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We know that learning to communicate with computers can be difficult. Discouraging at best, infuriating at worst. Use the chat component to ask questions without engaging in a full on study session. Get in the zone. Stay in the zone.
        </p>
        <Button as='a' size='large'>
          Learn about chatting with Code Friends
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          From Code Friend to Colleague 
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          You are more likely to gain employment through someone you know outside of the interview environment. Why not increase your chances of getting noticed by sharing your skill set with thousands of local, established and student developers. #friendUp
        </p>
        <a href="https://www.linkedin.com/pulse/7-reasons-have-study-buddy-carolyn-mcintyre/" target="_blank">
        <Button as='a' size='large'>7 Reason to join Code Friender</Button>
        </a>
        
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>This is Not a Link</List.Item>
                <List.Item as='a'>CodeFriender FAQ</List.Item>

              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                The Developers
              </Header>
              <p>
                This is where we should put some links to our github/linkedIn/ or something...
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

function mapstateToProps(state) {
  console.log(state);
  return { authenticated: state.auth.authenticated };
}

export default connect(mapstateToProps)(HomepageLayout);
