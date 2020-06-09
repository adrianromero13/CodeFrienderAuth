import React from 'react';
import { Icon, Card, Image } from 'semantic-ui-react';


export default (props) => {
    console.log('inside of cardrender', props);
    const { _id, badge, firstName, lastName, strength, weakness, bio, email } = props.allMatches;
    return (
        <Card centered color={'red'} key={_id}>
            <Image src={badge} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{firstName} {lastName}</Card.Header>
                <Card.Meta>
                    <span>Strength: {strength} </span>
                    <br />
                    <span>Weakness: {weakness} </span>
                </Card.Meta>
                <Card.Description>{bio}</Card.Description>
            </Card.Content>
            <Card.Content extra link>
                <Icon name='user secret' iconPosition='left' />
                {email}
            </Card.Content>
        </Card>
    )
};
