import React, { Component } from 'react';
import httpClient from './httpClient.js'
import UserItem from './UserItem.js'
import _ from 'lodash'
import { Container, Row, Col } from 'reactstrap';

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
    const newUser = {name: name.value, email: email.value, bio: bio.value, avatar: avatar.value}
  
    httpClient.addUser(newUser).then((serverResponse) => {
      console.log(serverResponse.data)
      this.setState({
        users: [...this.state.users, serverResponse]
      })
    })
    name.value = ""
    email.value = ""
    bio.value = ""
    avatar.value = ""
    name.focus()
  
  }

  render() {
    console.log(this.state.users)
    const userRows = _.chunk(this.state.users, 4)
    console.log(userRows)
    return (
      <Container className="App">
        <form>
          <input ref ="name" type="text" placeholder="Name"/>
          <input ref ="email" type="text"placeholder="Email"/>
          <input ref ="bio" type="text" placeholder="Bio"/>
          <input ref ="avatar" type="text" placeholder="Image URL"/>
          <button>Submit</button>
        </form>
        <div>
            {userRows.map((row, index) => {
              return (
                <Row key={index}>
                  {row.map((u) => {
                    return (
                    <Col key={u._id} sm="3">
                       <UserItem user={u} />
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
