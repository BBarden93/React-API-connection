import React, { Component } from 'react';
import './App.css';
import httpClient from './httpClient.js'

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

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <ul>
            {this.state.users.map((u) => {
              return <li key={u._id}>{u.name}</li>
            })}
        </ul> 
      </div>
    );
  }
}

export default App;
