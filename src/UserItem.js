import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserItem = (props) => {
    const {user} = props 

    return(
    
    <Card>
        <CardImg top width="100px" src={user.avatar} alt={user.name} />
        <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <CardSubtitle>{user.email}</CardSubtitle>
            <CardText>{user.bio}</CardText>
            <Button>Delete</Button>
        </CardBody>
    </Card>
    )
}

export default UserItem