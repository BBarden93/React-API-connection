import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function truncateString(str, num) {
    if(num > str.length){
         return str
    } else {
    return str.slice(0, num) + "..."
    }
}

const UserItem = (props) => {
    const {user} = props 
    const truncatedBio = truncateString(user.bio, 20)
    return (
    <Card>
        <CardImg top width="100%" src={user.avatar} alt={user.name} />
        <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <CardSubtitle>{user.email}</CardSubtitle>
            <CardText>{user.bio}</CardText>
            <Button onClick={props.onDeleteClick}>Delete</Button>
        </CardBody>
    </Card>
    )
}

export default UserItem