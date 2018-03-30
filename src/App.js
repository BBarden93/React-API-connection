import React, { Component } from 'react';
import httpClient from './httpClient.js'
import UserItem from './UserItem.js'
import _ from 'lodash'
import { Container, Row, Col, Label, Form, FormGroup, FormText, Input, Button } from 'reactstrap';

class App extends Component {
  
  state = {
    users: []
  }

  componentDidMount() {
    httpClient.getUsers().then((serverResponse) => {
      this.setState({
        users: serverResponse.data.users
      })
    })
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const {name, email, bio, avatar} = this.refs
    const newUser = {
      name: name.refs.name.value, 
      email: email.refs.email.value, 
      bio: bio.refs.bio.value, 
      avatar: avatar.refs.avatar.value}
  
    httpClient.addUser(newUser).then((serverResponse) => {
      const {data} = serverResponse
      if(data.success) {
        console.log(data)
      this.setState({
        users: [...this.state.users, serverResponse]
      })
      }
    })
    name.value = ""
    email.value = ""
    bio.value = ""
    avatar.value = ""
    name.refs.name.focus()
  }

  handleCardDelete(user) {
    console.log(user)
    httpClient.destroyUser(user).then((serverResponse) => {
      console.log(serverResponse.data)
      this.setState({
        users: this.state.users.filter((user) => {
          return user._id !== user 
        })
      })
    })
  }

  render() {
    console.log(this.state.users)
    const userRows = _.chunk(this.state.users, 4)
    console.log(userRows)
    return (
      <Container className="App">
        <Form onSubmit={this.handleFormSubmit.bind(this)}>
          <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input ref="name" innerRef="name" type="text" placeholder="Name" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input ref="email" innerRef="email" type="text" placeholder="Email" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input ref="bio" innerRef="bio" type="text" placeholder="Bio" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input ref="avatar" innerRef="avatar" type="text" placeholder="Avatar" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <div>
            {userRows.map((row, index) => {
              return (
                <Row key={index}>
                  {row.map((u) => {
                    return (
                    <Col key={u._id} sm="3">
                       <UserItem 
                          user={u}
                          onDeleteClick={this.handleCardDelete.bind(this, u._id)
                       }/>
                    </Col>
                    )
                  })}
                </Row>
              )
            })}
        </div> 
      </Container>
    );
  } 
}      

export default App;
